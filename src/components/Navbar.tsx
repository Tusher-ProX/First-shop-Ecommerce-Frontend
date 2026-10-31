"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
	Search,
	UserRound,
	ShoppingBag,
	Menu,
	X,
} from "lucide-react";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);

	const navLinks = [
		{ name: "HOME", href: "/" },
		{ name: "SHOP", href: "/products" },
		{ name: "CATEGORIES", href: "/categories" },
		{ name: "ABOUT", href: "/about" },
		{ name: "CONTACT", href: "/contect" },
	];

	return (
		<header className="sticky top-0 z-50 border-b border-border bg-cream/95 shadow-sm backdrop-blur-md">

			{/* Main Navbar */}
			<div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">

				{/* Logo */}
				<Link href="/" className="shrink-0">
					<Image
						src="/sharees-canvas-logoV1.png"
						alt="Sharees Canvas"
						width={210}
						height={70}
						priority
						className="h-auto w-32 object-contain sm:w-40 lg:w-45"
					/>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden items-center gap-8 md:flex">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className={`text-sm font-medium transition-colors duration-200 ${
								link.name === "Home"
								? "text-burgundy"
								: "text-foreground hover:text-burgundy"
							}`}
							>
							{link.name}
						</Link>
					))}
				</nav>

				{/* Right Actions */}
				<div className="flex shrink-0 items-center gap-1 sm:gap-2">

				{/* Desktop Search */}
				<div className="hidden items-center rounded-full border border-border bg-white px-3 transition-colors focus-within:border-burgundy md:flex">
					<input
						type="search"
						placeholder="Search products..."
						className="w-36 bg-transparent py-2 text-sm outline-none placeholder:text-gray-400 lg:w-48"
					/>

					<button
						type="button"
						aria-label="Search products"
						className="ml-3 cursor-pointer text-foreground transition-colors duration-200 hover:text-burgundy"
					>
					<Search size={22} strokeWidth={2} />
					</button>
				</div>

				{/* Mobile Search Button */}
				<button
					type="button"
					aria-label="Open search"
					onClick={() => setSearchOpen(!searchOpen)}
					className="cursor-pointer rounded-full p-2 text-foreground transition-colors duration-200 hover:bg-white hover:text-burgundy md:hidden"
				>
					<Search size={22} strokeWidth={1.8} />
				</button>

				{/* Profile */}
				<Link
					href="/profile"
					aria-label="My profile"
					className="rounded-full p-2 text-foreground transition-colors hover:bg-white hover:text-burgundy"
				>
					<UserRound size={22} strokeWidth={1.7} />
				</Link>

				{/* Shopping Cart */}
				<Link
					href="/cart"
					aria-label="Shopping cart"
					className="rounded-full p-2 text-foreground transition-colors hover:bg-white hover:text-burgundy"
				>
					<ShoppingBag size={22} strokeWidth={1.7} />
				</Link>

				{/* Mobile Menu Button */}
				<button
					type="button"
					aria-label={menuOpen ? "Close menu" : "Open menu"}
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen(!menuOpen)}
					className="cursor-pointer rounded-md p-2 text-foreground transition-colors duration-200 hover:bg-white hover:text-burgundy md:hidden"
				>
					{menuOpen ? (
					<X size={24} strokeWidth={1.8} />
					) : (
					<Menu size={24} strokeWidth={1.8} />
					)}
				</button>
				</div>
			</div>

			{/* Mobile Search Field */}
			{searchOpen && (
				<div className="border-t border-border px-4 py-3 md:hidden">
					<div className="flex items-center rounded-full border border-border bg-white px-4 transition-colors focus-within:border-burgundy">

						<input
							type="search"
							placeholder="Search products..."
							autoFocus
							className="w-full min-w-0 bg-transparent py-3 text-sm outline-none placeholder:text-gray-400"
						/>

						<button
							type="button"
							aria-label="Search products"
							className="ml-3 shrink-0 cursor-pointer text-foreground transition-colors duration-200 hover:text-burgundy"
						>
							<Search size={22} strokeWidth={1.8} />
						</button>
					</div>
				</div>
			)}

			{/* Mobile Navigation */}
			{menuOpen && (
				<nav className="border-t border-border bg-cream px-5 py-4 md:hidden">
					<div className="mx-auto flex max-w-7xl flex-col gap-4">
						{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							onClick={() => setMenuOpen(false)}
							className="text-sm font-medium text-foreground transition-colors hover:text-burgundy"
						>
							{link.name}
						</Link>
						))}
					</div>
				</nav>
			)}
		</header>
	);
}
