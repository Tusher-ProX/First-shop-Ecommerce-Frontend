"use client";

import { useState } from "react";
import BlousePieceSelector from "./BlousePieceSelector";

type ProductPurchaseOptionsProps = {
    price: number;
    blousePieceAvailable: boolean;
    blousePiecePrice: number;
};

export default function ProductPurchaseOptions({
    price,
    blousePieceAvailable,
    blousePiecePrice,
}: ProductPurchaseOptionsProps) {
    const [includeBlouse, setIncludeBlouse] = useState(false);

    const totalPrice =
        price + (includeBlouse ? blousePiecePrice : 0);

    return (
        <div className="mt-6">
            <BlousePieceSelector
                available={blousePieceAvailable}
                price={blousePiecePrice}
                selected={includeBlouse}
                onChange={setIncludeBlouse}
            />

            {/* Total Price */}
            <div className="mt-6 border-t border-[#E8DDD2] pt-5">
                <p className="text-sm text-gray-500">
                    Total Price
                </p>

                <p className="mt-1 text-2xl font-semibold text-burgundy">
                    ৳{totalPrice.toLocaleString("en-BD")}
                </p>
            </div>
        </div>
    );
}
