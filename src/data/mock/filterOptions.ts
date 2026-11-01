export type FilterOption = {
    id: string;
    name: string;
};

export type ColorFilterOption = FilterOption & {
    hex: string;
};

export const categories: FilterOption[] = [
    {
        id: "all-sarees",
        name: "All Sarees",
    },
];

export const fabrics: FilterOption[] = [
    {
        id: "silk",
        name: "Silk",
    },
];

export const colors: ColorFilterOption[] = [
    {
        id: "maroon",
        name: "Maroon",
        hex: "#722F3E",
    },
    {
        id: "red",
        name: "Red",
        hex: "#B91C1C",
    },
    {
        id: "black",
        name: "Black",
        hex: "#222222",
    },
    {
        id: "navy-blue",
        name: "Navy Blue",
        hex: "#1E3A5F",
    },
];