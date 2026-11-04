"use client";

import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

import { reviews } from "@/src/data/Reviews";
import { useProductReview } from "@/src/components/products/ProductReviewContext";


type ProductReviewsProps = {
    rating: number;
    reviewCount: number;
};

export default function ProductReviews({
    rating,
    reviewCount,
}: ProductReviewsProps) {

    const { isOpen } = useProductReview();
    const reviewSectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (isOpen) {
            reviewSectionRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [isOpen]);
    
    return (
        isOpen && (
            <section 
                ref={reviewSectionRef}
                className="mx-auto mt-16 max-w-7xl border-t border-border pt-10"
            >
                <h2 className="text-2xl font-semibold text-primary">
                    Customer Reviews
                </h2>

                {/* Rating Summary */}
                <div className="mt-5 flex flex-wrap items-center gap-4">
                    <span className="text-4xl font-semibold text-primary">
                        {rating.toFixed(1)}
                    </span>

                    <div>
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    size={18}
                                    className="fill-accent text-accent"
                                />
                            ))}
                        </div>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Based on {reviewCount} reviews
                        </p>
                    </div>
                </div>

                {/* Review List */}
                {isOpen && (
                    <div className="mt-8 space-y-6">
                        {reviews.map((review) => (
                            <article
                                key={review.id}
                                className="border-b border-border pb-6"
                            >
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <h3 className="font-medium text-foreground">
                                        {review.customerName}
                                    </h3>

                                    <span className="text-xs text-muted-foreground">
                                        {review.date}
                                    </span>
                                </div>

                                <div className="mt-2 flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={15}
                                            className={
                                                star <= review.rating
                                                    ? "fill-accent text-accent"
                                                    : "text-muted-foreground/40"
                                            }
                                        />
                                    ))}
                                </div>

                                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                    {review.comment}
                                </p>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        )
    );
}
