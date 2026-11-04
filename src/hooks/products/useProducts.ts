import { useEffect, useState } from "react";

import { productService } from "@/src/services/products";

import type {
    ProductQueryParams,
    ProductQueryResult,
} from "@/src/services/products";

export function useProducts(
    isEnabled: boolean,
    queryParams: ProductQueryParams
) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [retryCount, setRetryCount] = useState(0);

    const [productResult, setProductResult] =
        useState<ProductQueryResult | null>(null);

    useEffect(() => {
        if (!isEnabled) return;

        let isActive = true;

        const loadProducts = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const result =
                    await productService.getProducts(queryParams);

                if (isActive) {
                    setProductResult(result);
                }
            } catch (error) {
                console.error(
                    "Failed to load products:",
                    error
                );

                if (isActive) {
                    setError(
                        "Failed to load products. Please try again."
                    );
                }
            } finally {
                if (isActive) {
                    setIsLoading(false);
                }
            }
        };

        loadProducts();

        return () => {
            isActive = false;
        };
    }, [
        isEnabled,
        queryParams,
        retryCount,
    ]);

    const retry = () => {
        setRetryCount((count) => count + 1);
    };

    return {
        isLoading,
        error,

        productResult,
        currentProducts: productResult?.items ?? [],
        totalProducts: productResult?.total ?? 0,
        totalPages: productResult?.totalPages ?? 0,

        retry,
    };
}