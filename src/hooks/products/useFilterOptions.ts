import { useEffect, useState } from "react";

import { productService } from "@/src/services/products";
import { getFilterOptions } from "@/src/services/mock/filterService";

import type { FilterOptions } from "@/src/services/mock/filterService";

type PriceRange = {
    min: number;
    max: number;
};

export function useFilterOptions() {
    const [isFilterReady, setIsFilterReady] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [filterOptions, setFilterOptions] =
        useState<FilterOptions>({
            categories: [],
            fabrics: [],
            colors: [],
        });

    const [priceRange, setPriceRange] =
        useState<PriceRange>({
            min: 0,
            max: 0,
        });

    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        let isActive = true;

        const loadFilterOptions = async () => {
            setIsFilterReady(false);
            setError(null);

            try {
                const [options, range] = await Promise.all([
                    getFilterOptions(),
                    productService.getPriceRange(),
                ]);

                if (!isActive) return;

                setFilterOptions(options);
                setPriceRange(range);
                setIsFilterReady(true);
            } catch (error) {
                console.error(
                    "Failed to load filter options:",
                    error
                );

                if (isActive) {
                    setError(
                        "Failed to load filter options. Please try again."
                    );
                }
            }
        };

        loadFilterOptions();

        return () => {
            isActive = false;
        };
    }, [retryCount]);

    const retry = () => {
        setRetryCount((count) => count + 1);
    };

    return {
        isFilterReady,
        filterOptions,
        priceRange,
        error,
        retry,
    };
}