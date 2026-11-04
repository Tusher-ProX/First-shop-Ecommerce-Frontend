"use client";

import { useState } from "react";
import { Heart, ShoppingBag, Zap } from "lucide-react";

export default function ProductActions() {
    const [isWishlisted, setIsWishlisted] = useState(false);

    return (
        <div className="mt-8 flex items-stretch gap-3">
            {/* Add to Cart */}
            <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 bg-primary px-3 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
                <ShoppingBag size={18} />
                <span>Add to Cart</span>
            </button>

            {/* Buy Now */}
            <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 border border-primary px-3 py-4 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
                <Zap size={18} />
                <span>Buy Now</span>
            </button>

            {/* Wishlist */}
            <button
                type="button"
                onClick={() => setIsWishlisted(!isWishlisted)}
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                aria-pressed={isWishlisted}
                className="flex aspect-square w-14 shrink-0 items-center justify-center border border-border text-primary transition-colors hover:border-primary"
            >
                <Heart
                    size={21}
                    fill={isWishlisted ? "currentColor" : "none"}
                />
            </button>
        </div>
    );
}