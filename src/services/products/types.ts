
import type { Product } from "@/src/data/products";

export type ProductSortOrder =
    | "featured"
    | "price-low"
    | "price-high"
    | "name-az";

export type ProductQueryParams = {
    page: number;
    limit: number;
    minPrice: number;
    maxPrice: number;
    categories: string[];
    fabrics: string[];
    colors: string[];
    sortBy: ProductSortOrder;
};

export type ProductQueryResult = {
    items: Product[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
};

export type ProductPriceRange = {
    min: number;
    max: number;
};