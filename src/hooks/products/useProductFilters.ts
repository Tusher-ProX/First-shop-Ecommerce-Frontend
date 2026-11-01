import { useEffect, useState } from "react";

import type { ProductSortOrder } from "@/src/services/products";

function updateSelection(
    current: string[],
    value: string,
    checked: boolean
): string[] {
    if (checked) {
        return current.includes(value)
            ? current
            : [...current, value];
    }

    return current.filter((item) => item !== value);
}

export function useProductFilters(
    isFilterReady: boolean,
    minPrice: number,
    maxPrice: number
) {
    const [currentPage, setCurrentPage] = useState(1);

    const [sortOrder, setSortOrder] =
        useState<ProductSortOrder>("featured");

    const [selectedMinPrice, setSelectedMinPrice] =
        useState(minPrice);

    const [selectedMaxPrice, setSelectedMaxPrice] =
        useState(maxPrice);

    const [selectedCategories, setSelectedCategories] =
        useState<string[]>([]);

    const [selectedFabrics, setSelectedFabrics] =
        useState<string[]>([]);

    const [selectedColors, setSelectedColors] =
        useState<string[]>([]);

    // Sync selected price range when filter options load
    useEffect(() => {
        if (!isFilterReady) return;

        setSelectedMinPrice(minPrice);
        setSelectedMaxPrice(maxPrice);
        setCurrentPage(1);
    }, [isFilterReady, minPrice, maxPrice]);

    const updateCategory = (
        category: string,
        checked: boolean
    ) => {
        setSelectedCategories((current) =>
            updateSelection(current, category, checked)
        );

        setCurrentPage(1);
    };

    const updateFabric = (
        fabric: string,
        checked: boolean
    ) => {
        setSelectedFabrics((current) =>
            updateSelection(current, fabric, checked)
        );

        setCurrentPage(1);
    };

    const updateColor = (
        color: string,
        checked: boolean
    ) => {
        setSelectedColors((current) =>
            updateSelection(current, color, checked)
        );

        setCurrentPage(1);
    };

    const updateMinPrice = (value: number) => {
        setSelectedMinPrice(
            Math.min(value, selectedMaxPrice)
        );

        setCurrentPage(1);
    };

    const updateMaxPrice = (value: number) => {
        setSelectedMaxPrice(
            Math.max(value, selectedMinPrice)
        );

        setCurrentPage(1);
    };

    const clearFilters = () => {
        setSelectedCategories([]);
        setSelectedFabrics([]);
        setSelectedColors([]);
        setSelectedMinPrice(minPrice);
        setSelectedMaxPrice(maxPrice);
        setCurrentPage(1);
    };

    const changeSortOrder = (value: ProductSortOrder) => {
        setSortOrder(value);
        setCurrentPage(1);
    };

    return {
        currentPage,
        setCurrentPage,

        sortOrder,
        setSortOrder: changeSortOrder,

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
    };
}