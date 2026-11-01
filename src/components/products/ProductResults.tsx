
import ProductCard from "./ProductCard";
import ProductPagination from "./ProductPagination";

import type { Product } from "@/src/data/products";

type ProductResultsProps = {
    isLoading: boolean;
    error: string | null;
    currentProducts: Product[];
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    onRetry: () => void;
};

export default function ProductResults({
    isLoading,
    error,
    currentProducts,
    currentPage,
    totalPages,
    onPageChange,
    onRetry,
}: ProductResultsProps) {
    if (error) {
        return (
            <div className="py-12 text-center">
                <p className="mb-4 text-red-600">
                    {error}
                </p>

                <button
                    type="button"
                    onClick={onRetry}
                    className="border border-burgundy px-5 py-2 text-sm text-burgundy transition-colors hover:bg-burgundy hover:text-white"
                >
                    Try Again
                </button>
            </div>
        );
    }

    if (isLoading) {
        return (
            <p className="py-12 text-center text-muted">
                Loading products...
            </p>
        );
    }

    if (currentProducts.length === 0) {
        return (
            <p className="py-12 text-center text-muted">
                No products match your selected filters.
            </p>
        );
    }

    return (
        <>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
                {currentProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>

            <ProductPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </>
    );
}
