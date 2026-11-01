import { products } from "@/src/data/products";

import type { ProductService } from "./productService";
import type { ProductQueryParams } from "./types";

export const mockProductService: ProductService = {
    async getProducts(params: ProductQueryParams) {
        const filteredProducts = products.filter((product) => {
            const matchesPrice =
                product.price >= params.minPrice &&
                product.price <= params.maxPrice;

            const matchesCategory =
                params.categories.length === 0 ||
                params.categories.includes(product.category);

            const matchesFabric =
                params.fabrics.length === 0 ||
                (product.fabric !== undefined &&
                    params.fabrics.includes(product.fabric));

            const matchesColor =
                params.colors.length === 0 ||
                (product.colors !== undefined &&
                    product.colors.some((color) =>
                        params.colors.includes(color.name)
                    ));

            return (
                matchesCategory &&
                matchesPrice &&
                matchesFabric &&
                matchesColor
            );
        });

        const sortedProducts = [...filteredProducts].sort((a, b) => {
            if (params.sortBy === "price-low") {
                return a.price - b.price;
            }

            if (params.sortBy === "price-high") {
                return b.price - a.price;
            }

            if (params.sortBy === "name-az") {
                return a.name.localeCompare(b.name);
            }

            return 0;
        });

        const total = sortedProducts.length;
        const totalPages = Math.ceil(total / params.limit);
        const startIndex = (params.page - 1) * params.limit;

        const items = sortedProducts.slice(
            startIndex,
            startIndex + params.limit
        );

        return {
            items,
            total,
            page: params.page,
            limit: params.limit,
            totalPages,
        };
    },

    async getPriceRange() {
        const prices = products.map((product) => product.price);

        return {
            min: prices.length > 0 ? Math.min(...prices) : 0,
            max: prices.length > 0 ? Math.max(...prices) : 0,
        };
    },
};
