"use client";

import { useCallback, useRef, useState } from "react";

import FilterSidebar from "./FilterSidebar";
import ProductResults from "./ProductResults";
import ProductToolbar from "./ProductToolbar";

import { useFilterOptions } from "@/src/hooks/products/useFilterOptions";
import { useProductFilters } from "@/src/hooks/products/useProductFilters";
import { useProducts } from "@/src/hooks/products/useProducts";
import { useEscapeKey } from "@/src/hooks/useEscapeKey";

const PRODUCTS_PER_PAGE = 12;

export default function ProductGrid({
    showToolbar = false,
}: {
    showToolbar?: boolean;
}) {
    const [isMobileFilterOpen, setIsMobileFilterOpen] =
        useState(false);

    const productGridRef = useRef<HTMLDivElement>(null);

    const closeMobileFilter = useCallback(() => {
        setIsMobileFilterOpen(false);
    }, []);

    useEscapeKey(closeMobileFilter);

    // Load filter options
    const {
        isFilterReady,
        filterOptions,
        priceRange,
        error: filterError,
        retry: retryFilterOptions,
    } = useFilterOptions();

    // Manage filter and sorting state
    const {
        currentPage,
        setCurrentPage,
        sortOrder,
        setSortOrder,
        selectedMinPrice,
        selectedMaxPrice,
        selectedCategories,
        selectedFabrics,
        selectedColors,
        updateCategory,
        updateFabric,
        updateColor,
        updateMinPrice,
        updateMaxPrice,
        clearFilters,
    } = useProductFilters(
        isFilterReady,
        priceRange.min,
        priceRange.max
    );

    // Fetch products
    const {
        isLoading,
        error: productError,
        currentProducts,
        totalProducts,
        totalPages,
        retry: retryProducts,
    } = useProducts(
        isFilterReady,
        {
            page: currentPage,
            limit: PRODUCTS_PER_PAGE,
            minPrice: selectedMinPrice,
            maxPrice: selectedMaxPrice,
            categories: selectedCategories,
            fabrics: selectedFabrics,
            colors: selectedColors,
            sortBy: sortOrder,
        }
    );

    const error = filterError || productError;

    const handleRetry = () => {
        if (filterError) {
            retryFilterOptions();
        } else {
            retryProducts();
        }
    };

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;

        setCurrentPage(page);

        productGridRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div ref={productGridRef} className="scroll-mt-24">
            {/* Product Toolbar */}
            {showToolbar && (
                <ProductToolbar
                    totalProducts={totalProducts}
                    sortOrder={sortOrder}
                    onSortChange={setSortOrder}
                    onOpenMobileFilter={() =>
                        setIsMobileFilterOpen(true)
                    }
                />
            )}

            <div
                className={
                    showToolbar
                        ? "grid grid-cols-1 gap-8 lg:grid-cols-[250px_minmax(0,1fr)]"
                        : ""
                }
            >
                {/* Filter Sidebar */}
                {showToolbar && (
                    <FilterSidebar
                        categories={filterOptions.categories}
                        fabrics={filterOptions.fabrics}
                        colors={filterOptions.colors}
                        selectedCategories={selectedCategories}
                        onCategoryChange={updateCategory}
                        minPriceLimit={priceRange.min}
                        maxPriceLimit={priceRange.max}
                        minPrice={selectedMinPrice}
                        maxPrice={selectedMaxPrice}
                        onMinPriceChange={updateMinPrice}
                        onMaxPriceChange={updateMaxPrice}
                        selectedFabrics={selectedFabrics}
                        onFabricChange={updateFabric}
                        selectedColors={selectedColors}
                        onColorChange={updateColor}
                        onClearFilters={clearFilters}
                        isMobileOpen={isMobileFilterOpen}
                        onClose={closeMobileFilter}
                    />
                )}

                {/* Product Results */}
                <div className="min-w-0">
                    {!isFilterReady && !filterError ? (
                        <p className="py-12 text-center text-muted">
                            Loading filters...
                        </p>
                    ) : (
                        <ProductResults
                            isLoading={isLoading}
                            error={error}
                            currentProducts={currentProducts}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                            onRetry={handleRetry}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
