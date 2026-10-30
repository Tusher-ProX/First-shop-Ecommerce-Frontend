"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "@/src/data/products";

const PRODUCTS_PER_PAGE = 12;

export default function ProductGrid() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const currentProducts = products.slice(
        startIndex,
        startIndex + PRODUCTS_PER_PAGE
    );

    if (products.length === 0) {
        return (
            <p className="py-12 text-center text-gray-500">
                No products found.
            </p>
        );
    }

    return (
        <div>
            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {currentProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>


            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-2">

                    {/* Previous Button */}
                    <button
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-2 text-sm text-foreground transition-colors hover:text-burgundy disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        ← Previous
                    </button>

                    {/* Page Numbers */}
                    {Array.from(
                        { length: totalPages },
                        (_, index) => index + 1
                    ).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            aria-current={currentPage === page ? "page" : undefined}
                            className={`flex h-10 w-10 items-center justify-center text-sm transition-colors ${
                                currentPage === page
                                    ? "bg-burgundy text-white"
                                    : "text-foreground hover:bg-burgundy/10"
                            }`}
                        >
                            {page}
                        </button>
                    ))}

                    {/* Next Button */}
                    <button
                        onClick={() => setCurrentPage((prev) => prev + 1)}
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
