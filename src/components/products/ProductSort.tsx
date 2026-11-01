"use client";

import type { ProductSortOrder } from "@/src/services/products";

type ProductSortProps = {
    value: ProductSortOrder;
    onChange: (value: ProductSortOrder) => void;
    mobile?: boolean;
};

const sortOptions: {
    value: ProductSortOrder;
    label: string;
}[] = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "name-az", label: "Name: A to Z" },
];

export default function ProductSort({
    value,
    onChange,
    mobile = false,
}: ProductSortProps) {
    return (
        <div className="flex items-center gap-2">
            <label
                htmlFor={mobile ? "mobile-sort-products" : "desktop-sort-products"}
                className="text-sm text-muted"
            >
                {mobile ? "Sort:" : "Sort By:"}
            </label>

            <select
                id={mobile ? "mobile-sort-products" : "desktop-sort-products"}
                value={value}
                onChange={(event) =>
                    onChange(event.target.value as ProductSortOrder)
                }
                className={
                    mobile
                        ? "max-w-38.5 border border-border bg-card px-2 py-2.5 text-sm text-foreground outline-none focus:border-burgundy"
                        : "border border-border bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-burgundy"
                }
            >
                {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}