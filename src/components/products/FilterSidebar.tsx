"use client";

import { X } from "lucide-react";

import type {
    FilterOption,
    ColorFilterOption,
} from "@/src/data/mock/filterOptions";

import PriceRangeFilter from "./filters/PriceRangeFilter";
import FilterOptionList from "./filters/FilterOptionList";
import FilterSection from "./filters/FilterSection";

type FilterSidebarProps = {
    categories: FilterOption[];
    fabrics: FilterOption[];
    colors: ColorFilterOption[];

    selectedCategories: string[];
    onCategoryChange: (
        category: string,
        checked: boolean
    ) => void;

    minPriceLimit: number;
    maxPriceLimit: number;
    minPrice: number;
    maxPrice: number;

    onMinPriceChange: (value: number) => void;
    onMaxPriceChange: (value: number) => void;

    selectedFabrics: string[];
    onFabricChange: (fabric: string, checked: boolean) => void;

    selectedColors: string[];
    onColorChange: (color: string, checked: boolean) => void;

    onClearFilters: () => void;

    isMobileOpen: boolean;
    onClose: () => void;
};

export default function FilterSidebar({
    categories,
    fabrics,
    colors,

    selectedCategories,
    onCategoryChange,

    minPriceLimit,
    maxPriceLimit,
    minPrice,
    maxPrice,

    onMinPriceChange,
    onMaxPriceChange,

    selectedFabrics,
    onFabricChange,

    selectedColors,
    onColorChange,

    onClearFilters,

    isMobileOpen,
    onClose,
}: FilterSidebarProps) {
    return (
        <>
            {/* Mobile Overlay */}
            {isMobileOpen && (
                <button
                    type="button"
                    aria-label="Close filters"
                    onClick={onClose}
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                />
            )}

            {/* Filter Sidebar / Mobile Drawer */}
            <aside
                aria-label="Product filters"
                aria-hidden={!isMobileOpen}
                className={`fixed right-0 top-0 z-50 h-dvh w-[85%] max-w-85 overflow-y-auto border-l border-border bg-card p-5 shadow-xl transition-transform duration-300 ease-in-out lg:sticky lg:top-24 lg:z-auto lg:h-fit lg:w-auto lg:max-w-none lg:translate-x-0 lg:border lg:border-border lg:shadow-none ${
                    isMobileOpen
                        ? "translate-x-0"
                        : "translate-x-full lg:translate-x-0"
                }`}
            >
                {/* Filter Heading */}
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-foreground">
                        Refine
                    </h2>

                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            onClick={onClearFilters}
                            className="text-sm text-burgundy transition-colors hover:underline"
                        >
                            Clear All
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close filters"
                            className="flex h-8 w-8 items-center justify-center text-xl text-foreground hover:text-burgundy lg:hidden"
                        >
                            <X size={18} strokeWidth={1.8} />
                        </button>
                    </div>
                </div>

                {/* Category */}
                <FilterSection
                    title="Category"
                    className="border-b border-border pb-5"
                >
                    <FilterOptionList
                        options={categories}
                        selectedOptions={selectedCategories}
                        onChange={onCategoryChange}
                        valueKey="id"
                    />
                </FilterSection>

                {/* Price Range */}
                <PriceRangeFilter
                    minPriceLimit={minPriceLimit}
                    maxPriceLimit={maxPriceLimit}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    onMinPriceChange={onMinPriceChange}
                    onMaxPriceChange={onMaxPriceChange}
                />

                {/* Fabric */}
                <FilterSection
                    title="Fabric"
                    className="border-b border-border py-5"
                >
                    <FilterOptionList
                        options={fabrics}
                        selectedOptions={selectedFabrics}
                        onChange={onFabricChange}
                        valueKey="name"
                    />
                </FilterSection>

                {/* Color */}
                <FilterSection
                    title="Color"
                    className="py-5"
                >
                    <FilterOptionList
                        options={colors}
                        selectedOptions={selectedColors}
                        onChange={onColorChange}
                        valueKey="name"
                        colorOptions
                    />
                </FilterSection>

                {/* Mobile Apply Button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="mt-2 w-full bg-burgundy px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-burgundy/90 lg:hidden"
                >
                    Show Results
                </button>
            </aside>
        </>
    );
}