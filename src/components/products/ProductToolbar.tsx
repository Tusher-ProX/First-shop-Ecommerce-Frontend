import { ListFilter } from "lucide-react";

import ProductSort from "./ProductSort";

import type { ProductSortOrder } from "@/src/services/products";

type ProductToolbarProps = {
    totalProducts: number;
    sortOrder: ProductSortOrder;
    onSortChange: (value: ProductSortOrder) => void;
    onOpenMobileFilter: () => void;
};

export default function ProductToolbar({
    totalProducts,
    sortOrder,
    onSortChange,
    onOpenMobileFilter,
}: ProductToolbarProps) {
    return (
        <>
            {/* Mobile Toolbar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 lg:hidden">
                <button
                    type="button"
                    onClick={onOpenMobileFilter}
                    className="flex items-center gap-2 border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                    <ListFilter size={18} strokeWidth={1.8} />
                    Show Filters
                </button>

                <ProductSort
                    value={sortOrder}
                    onChange={onSortChange}
                    mobile
                />
            </div>

            {/* Desktop Toolbar */}
            <div className="mb-6 hidden flex-wrap items-center justify-between gap-4 lg:flex">
                <p className="text-sm text-muted">
                    Showing {totalProducts} products
                </p>

                <ProductSort
                    value={sortOrder}
                    onChange={onSortChange}
                />
            </div>

            {/* Mobile Product Count */}
            <p className="mb-4 text-sm text-muted lg:hidden">
                Showing {totalProducts} products
            </p>
        </>
    );
}
