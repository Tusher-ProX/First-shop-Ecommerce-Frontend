"use client";

import { useProductReview } from "@/src/components/products/ProductReviewContext";
import ProductReviews from "@/src/components/products/ProductReviews";
import RelatedProducts from "@/src/components/products/RelatedProducts";

type ProductReviewContentProps = {
    productId: string;
    rating: number;
    reviewCount: number;
};

export default function ProductReviewContent({
    productId,
    rating,
    reviewCount,
}: ProductReviewContentProps) {
    const { isOpen } = useProductReview();

    return (
        <>
            {isOpen ? (
                <ProductReviews
                    rating={rating}
                    reviewCount={reviewCount}
                />
            ) : (
                <RelatedProducts currentProductId={productId} />
            )}
        </>
    );
}