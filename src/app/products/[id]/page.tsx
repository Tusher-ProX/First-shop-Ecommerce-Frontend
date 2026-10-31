import { notFound } from "next/navigation";
import Link from "next/link";

import { products } from "@/src/data/products";
import ProductGallery from "@/src/components/products/ProductGallery";
import ProductPurchaseOptions from "@/src/components/products/ProductPurchaseOptions";
import ProductActions from "@/src/components/products/ProductActions";
import ProductShare from "@/src/components/products/ProductShare";
import ProductReviews from "@/src/components/products/ProductReviews";

type ProductDetailsPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ProductDetailsPage({
    params,
}: ProductDetailsPageProps) {
    const { id } = await params;

    const product = products.find((item) => item.id === id);

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-cream px-4 py-10">
            {/* Breadcrumb Navigation */}
            <div className="mx-auto mb-8 max-w-7xl">
                <nav className="flex flex-wrap items-center gap-2 text-sm">
                    <Link
                        href="/"
                        className="text-gray-500 transition-colors hover:text-burgundy"
                    >
                        Home
                    </Link>

                    <span className="text-gray-400">/</span>

                    <Link
                        href="/products"
                        className="text-gray-500 transition-colors hover:text-burgundy"
                    >
                        Shop
                    </Link>

                    <span className="text-gray-400">/</span>

                    <span className="font-medium text-burgundy">
                        {product.name}
                    </span>
                </nav>
            </div>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">

                {/* Left Side - Product Images */}
                <div>
                    <ProductGallery
                        images={
                            product.images?.length
                                ? product.images
                                : [product.image]
                        }
                        name={product.name}
                        colors={product.colors}
                    />
                </div>

                {/* Right Side - Product Information */}
                <div>
                    {/* Product Name */}
                    <h1 className="text-3xl font-semibold text-burgundy">
                        {product.name}
                    </h1>

                    {/* Rating & Reviews */}
                    <div className="mt-3 flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className="text-lg text-[#D4A64A]"
                                >
                                    ★
                                </span>
                            ))}
                        </div>

                        <span className="text-sm font-semibold text-[#3D2925]">
                            {product.rating}/5
                        </span>

                        <span className="text-sm text-gray-500">
                            ({product.reviewCount} Reviews)
                        </span>
                    </div>

                    {/* Product Price */}
                    <div className="mt-5 flex flex-wrap items-center gap-3">
                        <span className="text-2xl font-semibold text-burgundy">
                            ৳{product.price.toLocaleString("en-BD")}
                        </span>

                        {product.originalPrice > product.price && (
                            <>
                                <span className="text-lg text-gray-400 line-through">
                                    ৳{product.originalPrice.toLocaleString("en-BD")}
                                </span>

                                <span className="bg-burgundy/10 px-3 py-1 text-sm font-medium text-burgundy">
                                    {Math.round(
                                        ((product.originalPrice - product.price) /
                                            product.originalPrice) *
                                            100
                                    )}% OFF
                                </span>
                            </>
                        )}
                    </div>

                    {/* Product Description */}
                    <p className="mt-4 text-gray-600">
                        {product.description ||
                            "Product description coming soon."}
                    </p>

                    {/* Product Details */}
                    <div className="mt-6 space-y-3 border-y border-[#E8DDD2] py-5">
                        {/* Blouse Piece & Total Price */}
                        <ProductPurchaseOptions
                            price={product.price}
                            blousePieceAvailable={product.blousePiece ?? false}
                            blousePiecePrice={product.blousePiecePrice ?? 0}
                        />

                        {/* Product Action Buttons */}
                        <ProductActions />

                        {/* Share Product */}
                        <ProductShare productName={product.name} />

                        {product.fabric && (
                            <p className="text-sm text-gray-600">
                                <span className="font-medium text-[#3D2925]">
                                    Fabric:
                                </span>{" "}
                                {product.fabric}
                            </p>
                        )}

                        {product.sku && (
                            <p className="text-sm text-gray-600">
                                <span className="font-medium text-[#3D2925]">
                                    Product Code:
                                </span>{" "}
                                {product.sku}
                            </p>
                        )}

                        <p className="text-sm">
                            <span className="font-medium text-[#3D2925]">
                                Availability:
                            </span>{" "}

                            {product.stock > 0 ? (
                                <span className="text-green-700">
                                    In Stock ({product.stock} available)
                                </span>
                            ) : (
                                <span className="text-red-600">
                                    Out of Stock
                                </span>
                            )}
                        </p>

                        {product.blousePiece !== undefined && (
                            <p className="text-sm text-gray-600">
                                <span className="font-medium text-[#3D2925]">
                                    Blouse Piece:
                                </span>{" "}
                                {product.blousePiece ? (
                                    <span>
                                        Available as optional add-on
                                        (Extra ৳{product.blousePiecePrice?.toLocaleString("en-BD")})
                                    </span>
                                ) : (
                                    "Not Available"
                                )}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Customer Reviews */}
            <ProductReviews
                rating={product.rating}
                reviewCount={product.reviewCount}
            />            
        </main>
    );
}
