"use client";

import { useState } from "react";

type ProductColor = {
    name: string;
    hex: string;
    images: string[];
};

type ProductGalleryProps = {
    images: string[];
    name: string;
    colors?: ProductColor[];
};

export default function ProductGallery({
    images,
    name,
    colors = [],
}: ProductGalleryProps) {
    const [selectedColor, setSelectedColor] = useState<ProductColor | null>(
        colors[0] || null
    );

    const currentImages =
        selectedColor?.images?.length
            ? selectedColor.images
            : images;

    const [selectedImage, setSelectedImage] = useState(
        currentImages[0] || images[0]
    );

    const handleColorChange = (color: ProductColor) => {
        setSelectedColor(color);

        const colorImages = color.images?.length
            ? color.images
            : images;

        setSelectedImage(colorImages[0]);
    };

    return (
        <div>
            {/* Main Image */}
            <div className="relative aspect-3/4 overflow-hidden bg-[#F1EAE3]">
                <img
                    src={selectedImage}
                    alt={`${name}${selectedColor ? ` - ${selectedColor.name}` : ""}`}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Thumbnail Images */}
            <div className="mt-4 flex gap-3">
                {currentImages.map((image, index) => (
                    <button
                        key={`${image}-${index}`}
                        type="button"
                        onClick={() => setSelectedImage(image)}
                        className={`h-20 w-16 overflow-hidden border-2 ${
                            selectedImage === image
                                ? "border-burgundy"
                                : "border-transparent"
                        }`}
                    >
                        <img
                            src={image}
                            alt={`${name} image ${index + 1}`}
                            className="h-full w-full object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Color Selection */}
            {colors.length > 0 && (
                <div className="mt-6">
                    <p className="mb-3 text-sm font-medium text-[#3D2925]">
                        Select Color:{" "}
                        <span className="font-normal text-gray-500">
                            {selectedColor?.name}
                        </span>
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {colors.map((color) => (
                            <button
                                key={color.name}
                                type="button"
                                onClick={() => handleColorChange(color)}
                                aria-label={`Select ${color.name}`}
                                aria-pressed={selectedColor?.name === color.name}
                                className={`h-9 w-9 rounded-full border-2 ${
                                    selectedColor?.name === color.name
                                        ? "border-burgundy ring-2 ring-burgundy/20"
                                        : "border-gray-300"
                                }`}
                                style={{ backgroundColor: color.hex }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
