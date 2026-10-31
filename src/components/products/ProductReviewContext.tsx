"use client";

import { createContext, useContext, useState } from "react";

type ProductReviewContextType = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
};

const ProductReviewContext = createContext<
    ProductReviewContextType | undefined
>(undefined);

export function ProductReviewProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ProductReviewContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </ProductReviewContext.Provider>
    );
}

export function useProductReview() {
    const context = useContext(ProductReviewContext);

    if (!context) {
        throw new Error(
            "useProductReview must be used inside ProductReviewProvider"
        );
    }

    return context;
}