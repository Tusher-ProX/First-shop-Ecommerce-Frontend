import {     
    categories,
    fabrics,
    colors, 
} from "@/src/data/mock/filterOptions";

import type {
    FilterOption,
    ColorFilterOption,
} from "@/src/data/mock/filterOptions";

export type FilterOptions = {
    categories: FilterOption[];
    fabrics: FilterOption[];
    colors: ColorFilterOption[];
};

export async function getFilterOptions(): Promise<FilterOptions> {
    return {
        categories,
        fabrics,
        colors,
    };
}