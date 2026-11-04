
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-background px-4 py-8 sm:px-6">
			<div className="w-full max-w-md">
				<div className="border border-border bg-surface p-5 shadow-sm sm:p-8">

					{/* Back Button and Logo */}
					<div className="mb-6 flex items-center justify-between">
						<Link
							href="/"
							className="text-sm text-muted transition hover:text-primary"
						>
							← Back to Home
						</Link>

						<Image
							src="/sharees-canvas-logoV1.png"
							alt="Sharee's Canvas"
							width={150}
							height={50}
							priority
							className="h-auto w-31.25 object-contain sm:w-36.25"
						/>
					</div>

					{/* Welcome Heading */}
					<div className="mb-6 text-center">
						<h1 className="text-2xl font-semibold text-foreground">
							Welcome Back
						</h1>

						<p className="mt-2 text-sm text-muted">
							Please login your account.
						</p>
					</div>

					{/* Login Form */}
					<form className="space-y-4">

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
								type="email"
								placeholder="Enter your email"
								className="w-full border border-border bg-surface px-4 py-2.5 text-sm outline-none transition placeholder:text-muted/70 focus:border-primary"
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
								type="password"
								placeholder="Enter your password"
								className="w-full border border-border bg-surface px-4 py-2.5 text-sm outline-none transition placeholder:text-muted/70 focus:border-primary"
							/>
						</div>

						{/* Remember Me and Forgot Password */}
						<div className="flex items-center justify-between gap-3 text-sm">
							<label className="flex cursor-pointer items-center gap-2 text-muted">
								<input
									type="checkbox"
									className="size-4 accent-primary"
								/>
								Remember me
							</label>

							<span className="text-muted/70">
								Forgot password?
							</span>
						</div>

						{/* Login Button */}
						<div className="pt-1">
							<button
								type="button"
								className="w-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
							>
								Login
							</button>
						</div>
					</form>

					{/* Register Link */}
					<div className="mt-5 border-t border-border pt-4 text-center">
						<p className="text-sm text-muted">
							Don&apos;t have an account?{" "}
							<Link
								href="/signup"
								className="font-semibold text-primary hover:underline"
							>
								Register
							</Link>
						</p>
					</div>

				</div>
			</div>
		</div>
	);
}
