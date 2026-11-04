
import Image from "next/image";
import Link from "next/link";
import {
	ShoppingBag,
	Trash2,
	Minus,
	Plus,
	ArrowRight,
	Tag,
	Truck,
	ArrowLeft,
} from "lucide-react";

const cartItems = [
	{
		id: 1,
		name: "Elegant Silk Saree",
		category: "Premium Collection",
		price: 2500,
		quantity: 1,
		image:
			"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500",
	},
	{
		id: 2,
		name: "Classic Cotton Saree",
		category: "Traditional Collection",
		price: 1800,
		quantity: 1,
		image:
			"https://images.unsplash.com/photo-1583391733956-6c78276477e5?w=500",
	},
];

export default function CartPage() {
	const subtotal = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	const shipping = 100;
	const total = subtotal + shipping;

	return (
		<main className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:py-14">
			<div className="mx-auto max-w-7xl">

				{/* Heading */}
				<div className="mb-8">
					<p className="text-sm font-medium text-primary">
						Your Shopping Experience
					</p>

					<h1 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
						Shopping Cart
					</h1>

					<p className="mt-2 text-sm text-muted">
						Review your selected products before checkout.
					</p>
				</div>

				<div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">

					{/* Cart Items */}
					<section className="space-y-5 lg:col-span-2">
						<div className="flex items-center justify-between border-b border-border pb-4">
							<h2 className="font-semibold text-foreground">
								Your Items ({cartItems.length})
							</h2>

							<span className="text-sm text-muted">
								{cartItems.length} Products
							</span>
						</div>

						{cartItems.map((item) => (
							<div
								key={item.id}
								className="flex flex-col gap-4 border border-border bg-surface p-4 sm:flex-row sm:items-center sm:p-5"
							>
								<div className="relative h-36 w-full shrink-0 bg-background sm:w-28">
									<Image
										src={item.image}
										alt={item.name}
										fill
										sizes="(max-width: 640px) 100vw, 112px"
										className="object-cover"
									/>
								</div>

								<div className="flex min-w-0 flex-1 flex-col justify-between gap-4 sm:flex-row sm:items-center">
									<div>
										<p className="text-xs text-muted">
											{item.category}
										</p>

										<h3 className="mt-1 font-semibold text-foreground">
											{item.name}
										</h3>

										<p className="mt-2 font-semibold text-primary">
											৳ {item.price.toLocaleString("en-BD")}
										</p>
									</div>

									<div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
										<div className="flex items-center border border-border">
											<span className="flex size-9 items-center justify-center text-muted">
												<Minus size={14} />
											</span>

											<span className="flex size-9 items-center justify-center border-x border-border text-sm">
												{item.quantity}
											</span>

											<span className="flex size-9 items-center justify-center text-muted">
												<Plus size={14} />
											</span>
										</div>

										<span className="flex items-center gap-1 text-xs text-error">
											<Trash2 size={14} />
											Remove
										</span>
									</div>
								</div>
							</div>
						))}

						<div className="flex items-center gap-3 border border-border bg-surface p-4">
							<ShoppingBag className="shrink-0 text-primary" size={20} />

							<span className="text-sm text-muted">
								Enjoy shopping with Sharee&apos;s Canvas.
							</span>
						</div>

						{/* Continue Shopping */}
						<div>
							<Link
								href="/products"
								className="inline-flex items-center gap-2 border border-primary px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
							>
								<ArrowLeft size={17} />
								Continue Shopping
							</Link>
						</div>
					</section>

					{/* Order Summary */}
					<aside className="border border-border bg-surface p-5 sm:p-6">
						<h2 className="border-b border-border pb-4 text-lg font-semibold text-foreground">
							Order Summary
						</h2>

						<div className="mt-5 space-y-4">
							<div className="flex justify-between text-sm">
								<span className="text-muted">Subtotal</span>

								<span className="font-medium text-foreground">
									৳ {subtotal.toLocaleString("en-BD")}
								</span>
							</div>

							<div className="flex justify-between text-sm">
								<span className="flex items-center gap-2 text-muted">
									<Truck size={16} />
									Shipping
								</span>

								<span className="font-medium text-foreground">
									৳ {shipping}
								</span>
							</div>

							<div className="flex justify-between text-sm">
								<span className="text-muted">Discount</span>

								<span className="font-medium text-success">
									৳ 0
								</span>
							</div>
						</div>

						<div className="mt-6 border-t border-border pt-5">
							<div className="flex items-center justify-between">
								<span className="font-semibold text-foreground">
									Total
								</span>

								<span className="text-xl font-bold text-primary">
									৳ {total.toLocaleString("en-BD")}
								</span>
							</div>
						</div>

						<div className="mt-6 flex items-center gap-2 border border-border p-3">
							<Tag size={17} className="shrink-0 text-primary" />

							<span className="text-xs text-muted">
								Promo code can be applied at checkout.
							</span>
						</div>

						<div className="mt-5 flex w-full items-center justify-center gap-2 bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground">
							Proceed to Checkout
							<ArrowRight size={17} />
						</div>

						<p className="mt-4 text-center text-xs text-muted">
							Secure and convenient shopping experience.
						</p>
					</aside>
				</div>
			</div>
		</main>
	);
}
