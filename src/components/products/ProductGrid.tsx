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
                    {Array.from(
                        { length: totalPages },
                        (_, index) => index + 1
                    ).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`flex h-10 w-10 items-center justify-center text-sm transition-colors ${
                                currentPage === page
                                    ? "bg-burgundy text-white"
                                    : "border border-border text-foreground hover:bg-burgundy hover:text-white"
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
