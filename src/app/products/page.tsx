import ProductGrid from "@/src/components/products/ProductGrid";

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-cream">
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

                {/* Page Heading */}
                <div className="mb-10 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-burgundy">
                        Explore Our Collection
                    </p>

                    <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                        All Products
                    </h1>

                    <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-muted">
                        Discover our complete collection of elegant designs.
                    </p>
                </div>

                {/* All Products */}
                <ProductGrid />

            </section>
        </main>
    );
}

