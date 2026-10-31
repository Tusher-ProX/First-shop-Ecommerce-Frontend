"use client";

import { Star } from "lucide-react";
import { useProductReview } from "@/src/components/products/ProductReviewContext";

type ReviewToggleButtonProps = {
    rating: number;
    reviewCount: number;
};

export default function ReviewToggleButton({
    rating,
    reviewCount,
}: ReviewToggleButtonProps) {
    const { isOpen, setIsOpen } = useProductReview();

    return (
        <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="mt-2 flex items-center gap-2 text-sm hover:opacity-80"
        >
            <span className="flex items-center gap-0.5 text-[#D4A64A]">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        size={15}
                        className="fill-[#D4A64A]"
                    />
                ))}
            </span>

            <span className="font-medium text-burgundy">
                {rating.toFixed(1)} ({reviewCount} Reviews)
            </span>
        </button>
    );
}