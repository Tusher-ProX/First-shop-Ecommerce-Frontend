import Link from "next/link";
import { products } from "@/src/data/products";
import ProductCard from "@/src/components/products/ProductCard";

type RelatedProductsProps = {
    currentProductId: string;
};

export default function RelatedProducts({
    currentProductId,
}: RelatedProductsProps) {
    const relatedProducts = products
        .filter((product) => product.id !== currentProductId)
        .slice(0, 4);

    if (relatedProducts.length === 0) {
        return null;
    }

    return (
        <section className="mx-auto mt-16 max-w-7xl border-t border-[#E8DDD2] pt-10">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-burgundy">
                    You May Also Like
                </h2>

                <Link
                    href="/products"
                    className="text-sm font-medium text-burgundy underline underline-offset-4"
                >
                    View All
                </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {relatedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
}