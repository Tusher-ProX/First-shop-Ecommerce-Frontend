import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
    id: string;
    name: string;
    image: string;
    price: number;
    originalPrice?: number;
    stock: number;
    fabric?: string;
};

export default function ProductCard({
    id,
    name,
    image,
    price,
    originalPrice,
    stock,
    fabric,
}: ProductCardProps) {
    const inStock = stock > 0;

    return (
        <Link href={`/products/${id}`} className="group block">
            <article className="h-full p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-3">
                {/* Product Image */}
                <div className="relative aspect-3/4 overflow-hidden bg-[#F1EAE3]">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Product Information */}
                <div className="mt-3 space-y-2 text-center">
                    {/* Product Name and Stock Status */}
                    {fabric && (
                        <p className="text-xs text-gray-500">
                            {fabric}
                        </p>
                    )}
                    <div className="flex flex-col items-center gap-2">
                        <h3 className="text-sm font-medium text-[#3D2925] sm:text-base">
                            {name}
                        </h3>

                        <span
                            className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-medium sm:text-xs ${
                                inStock
                                    ? "bg-green-50 text-green-700"
                                    : "bg-red-50 text-red-600"
                            }`}
                        >
                            {inStock ? "In Stock" : "Out of Stock"}
                        </span>
                    </div>

                    {/* Product Price */}
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-base font-semibold text-[#722F3E]">
                            ৳{price.toLocaleString("en-BD")}
                        </span>

                        {originalPrice && originalPrice > price && (
                            <span className="text-xs text-gray-400 line-through">
                                ৳{originalPrice.toLocaleString("en-BD")}
                            </span>
                        )}
                    </div>
                </div>
            </article>
        </Link>
    );
}