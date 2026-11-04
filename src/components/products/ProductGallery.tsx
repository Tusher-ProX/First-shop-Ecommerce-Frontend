"use client";

import Image from "next/image";
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
            <div className="relative aspect-3/4 overflow-hidden bg-surface-muted">
                <Image
                    src={selectedImage}
                    alt={`${name}${selectedColor ? ` - ${selectedColor.name}` : ""}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
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
                                ? "border-primary"
                                : "border-transparent"
                        }`}
                    >
                        <Image
                            src={image}
                            alt={`${name} image ${index + 1}`}
                            width={64}
                            height={80}
                            className="h-full w-full object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Color Selection */}
            {colors.length > 0 && (
                <div className="mt-6">
                    <p className="mb-3 text-sm font-medium text-foreground">
                        Select Color:{" "}
                        <span className="font-normal text-muted-foreground">
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
                                        ? "border-primary ring-2 ring-primary/20"
                                        : "border-border"
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
