
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-cream px-4 py-8 sm:px-6">
			<div className="w-full max-w-md">
				<div className="border border-border bg-white p-5 shadow-sm sm:p-8">

					{/* Back to Home and Logo */}
					<div className="mb-6 flex items-center justify-between">
						<Link
							href="/"
							className="text-sm text-muted transition hover:text-primary"
						>
							← Back to Home
						</Link>

						<Link href="/" aria-label="Sharee's Canvas home">
							<Image
								src="/sharees-canvas-logoV1.png"
								alt="Sharee's Canvas"
								width={150}
								height={50}
								priority
								className="h-auto w-31.25 object-contain sm:w-36.25"
							/>
						</Link>
					</div>

					{/* Heading */}
					<div className="mb-6 text-center">
						<h1 className="text-2xl font-semibold text-foreground">
							Create Account
						</h1>

						<p className="mt-2 text-sm text-muted">
							Sign up to start shopping with us.
						</p>
					</div>

					{/* Signup Form UI */}
					<form className="space-y-4">

						{/* Full Name */}
						<div>
							<label
								htmlFor="name"
								className="mb-1.5 block text-sm font-medium text-foreground"
							>
								Full Name
							</label>

							<input
								id="name"
								name="name"
								type="text"
								autoComplete="name"
								placeholder="Enter your full name"
								required
								className="w-full border border-border bg-white px-4 py-2.5 text-sm outline-none transition placeholder:text-muted/70 focus:border-primary"
							/>
						</div>

						{/* Email */}
						<div>
							<label
								htmlFor="email"
								className="mb-1.5 block text-sm font-medium text-foreground"
							>
								Email Address
							</label>

							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								placeholder="Enter your email"
								required
								className="w-full border border-border bg-white px-4 py-2.5 text-sm outline-none transition placeholder:text-muted/70 focus:border-primary"
							/>
						</div>

						{/* Password */}
						<div>
							<label
								htmlFor="password"
								className="mb-1.5 block text-sm font-medium text-foreground"
							>
								Password
							</label>

							<input
								id="password"
								name="password"
								type="password"
								autoComplete="new-password"
								placeholder="Create a password"
								required
								className="w-full border border-border bg-white px-4 py-2.5 text-sm outline-none transition placeholder:text-muted/70 focus:border-primary"
							/>
						</div>

						{/* Confirm Password */}
						<div>
							<label
								htmlFor="confirmPassword"
								className="mb-1.5 block text-sm font-medium text-foreground"
							>
								Confirm Password
							</label>

							<input
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								autoComplete="new-password"
								placeholder="Re-enter your password"
								required
								className="w-full border border-border bg-white px-4 py-2.5 text-sm outline-none transition placeholder:text-muted/70 focus:border-primary"
							/>
						</div>

						{/* Create Account Button */}
						<button
							type="button"
							className="block w-full border-0 bg-[#800020] px-4 py-3 text-center text-base font-semibold text-white transition hover:bg-[#68001A]"
						>
							Create Account
						</button>
					</form>

					{/* Login Link */}
					<div className="mt-5 border-t border-border pt-4 text-center">
						<p className="text-sm text-muted">
							Already have an account?{" "}
							<Link
								href="/login"
								className="font-semibold text-primary hover:underline"
							>
								Login
							</Link>
						</p>
					</div>

				</div>
			</div>
		</div>
	);
}
