"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { featuredProducts } from "../data/featuredProducts";

export default function HeroProductSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % featuredProducts.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    const activeProduct = featuredProducts[activeIndex];

    return (
        <section className="mx-auto w-full max-w-lg">
            {/* Section Heading */}
            <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                    Featured Products
                </h2>

                <Link
                    href="/products"
                    className="shrink-0 text-sm font-semibold text-burgundy transition-colors hover:text-[#600018]"
                >
                    View All →
                </Link>
            </div>

            {/* Section Subtitle */}
            <p className="mb-6 max-w-md text-sm leading-6 text-muted sm:text-base">
                Handpicked styles to showcase your timeless elegance.
            </p>

            {/* Product Image Slider */}
            <Link
                href={`/products/${activeProduct.productId}`}
                aria-label={`View ${activeProduct.name}`}
                className="group relative block aspect-4/5 w-full overflow-hidden bg-[#E9DED3]"
            >
                <Image
                    key={activeProduct.id}
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    fill
                    priority={activeIndex === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Minimal Image Text */}
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 via-black/30 to-transparent px-5 pb-5 pt-16 sm:px-6 sm:pb-6">
                <h3 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
                    {activeProduct.name}
                </h3>

                <p className="mt-1 text-sm text-white/90 sm:text-base">
                    {activeProduct.description}
                </p>
                </div>
            </Link>

            {/* Slider Indicators */}
            <div
                className="mt-4 flex items-center justify-center gap-3"
                aria-label="Choose featured product"
            >
                {featuredProducts.map((product, index) => (
                    <button
                        key={product.id}
                        type="button"
                        aria-label={`Show ${product.name}`}
                        aria-pressed={activeIndex === index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2.5 rounded-full transition-all ${
                        activeIndex === index
                            ? "w-8 bg-burgundy"
                            : "w-2.5 bg-[#C6A15B]"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}