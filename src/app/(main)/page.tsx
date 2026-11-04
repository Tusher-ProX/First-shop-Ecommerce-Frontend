import { Check } from "lucide-react";
import Link from "next/link";

import HeroProductSlider from "../../components/HeroProductSlider";
import ProductGrid from "../../components/products/ProductGrid";
import OurStoryPreview from "../../components/OurStoryPreview";

const benefits = [
  "Carefully Selected Designs",
  "Quality You Can Trust",
  "A Beautiful Shopping Experience",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">

		{/* Hero Section */}
		<section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
			{/* Left Content */}
			<div className="order-2 lg:order-1">
				<p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary sm:text-sm">
					Welcome to Sharees Canvas
				</p>

				<h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
					Elegance Woven Into{" "}
					<span className="font-serif italic text-primary">
						Every Moment.
					</span>
				</h1>

				<p className="mt-5 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
					Discover beautiful styles that bring together timeless elegance,
					thoughtful details, and your unique personality.
				</p>

				<div className="mt-8 flex flex-wrap items-center gap-4">
					<a
						href="#collections"
						className="inline-flex min-h-12 items-center justify-center bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
					>
						Shop Collection
						<span aria-hidden="true" className="ml-3 text-lg">
							→
						</span>
					</a>

					<a
						href="/about"
						className="inline-flex min-h-12 items-center border-b border-accent px-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
					>
						Discover Our Story
					</a>
				</div>

				<div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6">
					{benefits.map((benefit) => (
						<p
							key={benefit}
							className="flex items-center gap-2 text-xs text-muted sm:text-sm"
						>
							<Check
								aria-hidden="true"
								size={16}
								strokeWidth={5}
								className="text-success"
							/>
							{benefit}
						</p>
					))}
				</div>
			</div>

			{/* Right Featured Product Slider */}
			<div className="order-1 lg:order-2">
				<HeroProductSlider />
			</div>
		</section>

		{/* All Products Section */}
		<section id="collections" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
			<div className="relative mb-10">
				<div className="text-center">
					<h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
						All Products
					</h2>

					<p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-muted">
						Explore our carefully selected collection of elegant designs.
					</p>
				</div>

				<Link
					href="/products"
					className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary sm:absolute sm:right-0 sm:top-1/2 sm:mt-0 sm:-translate-y-1/2"
				>
					View All Products
					<span aria-hidden="true">→</span>
				</Link>
			</div>

			<ProductGrid />
		</section>

		{/* Our Story Section */}
		<OurStoryPreview />
    </main>
  );
}
