"use client";

import { useState } from "react";

type ProductColor = {
    name: string;
    hex: string;
};

type ColorSelectorProps = {
    colors: ProductColor[];
};

export default function ColorSelector({ colors }: ColorSelectorProps) {
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    if (!colors.length) {
        return null;
    }

    return (
        <div className="mt-6">
            <p className="mb-3 text-sm font-medium text-[#3D2925]">
                Select Color:{" "}
                <span className="font-normal text-gray-500">
                    {selectedColor.name}
                </span>
            </p>

            <div className="flex flex-wrap gap-3">
                {colors.map((color) => (
                    <button
                        key={color.name}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        aria-label={`Select ${color.name}`}
                        aria-pressed={selectedColor.name === color.name}
                        className={`h-9 w-9 rounded-full border-2 ${
                            selectedColor.name === color.name
                                ? "border-burgundy ring-2 ring-burgundy/20"
                                : "border-gray-300"
                        }`}
                        style={{ backgroundColor: color.hex }}
                    />
                ))}
            </div>
        </div>
    );
}