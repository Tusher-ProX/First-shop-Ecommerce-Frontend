"use client";

import { useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "@/src/data/products";

const PRODUCTS_PER_PAGE = 12;

export default function ProductGrid() {
    const [currentPage, setCurrentPage] = useState(1);
    const productGridRef = useRef<HTMLDivElement>(null);

    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

    const getPageNumbers = () => {
        const pages = new Set<number>();

        pages.add(1);
        pages.add(totalPages);
        pages.add(currentPage - 1);
        pages.add(currentPage);
        pages.add(currentPage + 1);

        const sortedPages = [...pages]
            .filter((page) => page >= 1 && page <= totalPages)
            .sort((a, b) => a - b);

        const result: (number | "...")[] = [];

        sortedPages.forEach((page, index) => {
            if (index > 0 && page - sortedPages[index - 1] > 1) {
                result.push("...");
            }

            result.push(page);
        });

        return result;
    };

    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const currentProducts = products.slice(
        startIndex,
        startIndex + PRODUCTS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);

        productGridRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    if (products.length === 0) {
        return (
            <p className="py-12 text-center text-gray-500">
                No products found.
            </p>
        );
    }

    return (
        <div ref={productGridRef} className="scroll-mt-24">
            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {currentProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>


            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-10 flex flex-wrap items-center justify-center gap-1 sm:gap-2">

                    {/* Previous Button */}
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-2 text-sm text-foreground transition-colors hover:text-burgundy disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        ← Previous
                    </button>

                    {/* Page Numbers */}
                    {getPageNumbers().map((page, index) =>
                        page === "..." ? (
                            <span
                                key={`ellipsis-${index}`}
                                className="flex h-10 w-8 items-center justify-center text-muted"
                            >
                                ...
                            </span>
                        ) : (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                aria-current={currentPage === page ? "page" : undefined}
                                className={`flex h-10 w-10 items-center justify-center text-sm transition-colors ${
                                    currentPage === page
                                        ? "bg-burgundy text-white"
                                        : "text-foreground hover:bg-burgundy/10"
                                }`}
                            >
                                {page}
                            </button>
                        )
                    )}

                    {/* Next Button */}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 text-sm text-foreground transition-colors hover:text-burgundy disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Next →
                    </button>

                </div>
            )}

        </div>
    );
}
