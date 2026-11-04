import {
	UserRound,
	Package,
	Heart,
	MapPin,
	Settings,
	LogOut,
	ShoppingBag,
	Clock3,
	CheckCircle2,
	Mail,
	Phone,
} from "lucide-react";

const menuItems = [
	{ label: "My Profile", icon: UserRound, active: true },
	{ label: "My Orders", icon: Package, active: false },
	{ label: "My Wishlist", icon: Heart, active: false },
	{ label: "My Addresses", icon: MapPin, active: false },
	{ label: "Account Settings", icon: Settings, active: false },
];

const stats = [
	{
		label: "Total Orders",
		value: "12",
		icon: ShoppingBag,
		description: "Orders placed",
	},
	{
		label: "Pending Orders",
		value: "02",
		icon: Clock3,
		description: "Waiting for delivery",
	},
	{
		label: "Completed Orders",
		value: "10",
		icon: CheckCircle2,
		description: "Successfully delivered",
	},
	{
		label: "Wishlist Items",
		value: "08",
		icon: Heart,
		description: "Saved products",
	},
];

const orders = [
	{
		id: "#SC-2026-001",
		product: "Elegant Silk Saree",
		date: "28 Oct, 2026",
		amount: "৳ 2,500",
		status: "Delivered",
	},
	{
		id: "#SC-2026-002",
		product: "Classic Cotton Saree",
		date: "25 Oct, 2026",
		amount: "৳ 1,800",
		status: "Processing",
	},
	{
		id: "#SC-2026-003",
		product: "Festive Collection",
		date: "20 Oct, 2026",
		amount: "৳ 2,200",
		status: "Shipped",
	},
];

export default function ProfilePage() {
	return (
		<main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:py-12">
			<div className="mx-auto max-w-7xl">

				{/* Page Heading */}
				<div className="mb-8">
					<h1 className="text-2xl font-semibold text-primary sm:text-3xl">
						My Account
					</h1>
					<p className="mt-2 text-sm text-muted">
						Welcome back! Manage your account and orders here.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

					{/* Sidebar */}
					<aside className="h-fit border border-border bg-surface p-5 lg:col-span-1">
						<div className="flex items-center gap-4 border-b border-border pb-5">
							<div className="flex size-14 shrink-0 items-center justify-center bg-primary/10 text-primary">
								<UserRound size={27} />
							</div>

							<div className="min-w-0">
								<h2 className="truncate font-semibold text-foreground">
									Tusher Mia
								</h2>
								<p className="truncate text-xs text-muted">
									customer@example.com
								</p>
							</div>
						</div>

						<nav className="mt-5 space-y-2">
							{menuItems.map((item) => {
								const Icon = item.icon;

								return (
									<div
										key={item.label}
										className={`flex items-center gap-3 px-4 py-3 text-sm font-medium ${
											item.active
												? "bg-primary text-primary-foreground"
												: "text-muted"
										}`}
									>
										<Icon size={18} />
										<span>{item.label}</span>
									</div>
								);
							})}

							<div className="mt-3 flex items-center gap-3 border-t border-border px-4 py-4 text-sm font-medium text-error">
								<LogOut size={18} />
								<span>Logout</span>
							</div>
						</nav>
					</aside>

					{/* Main Content */}
					<div className="min-w-0 space-y-6 lg:col-span-3">

						{/* Welcome Card */}
						<section className="flex flex-col justify-between gap-5 bg-primary p-6 text-primary-foreground sm:flex-row sm:items-center sm:p-8">
							<div>
								<p className="text-sm text-primary-foreground/70">
									Welcome to Sharee&apos;s Canvas
								</p>
								<h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
									Hello, Tusher!
								</h2>
								<p className="mt-2 max-w-lg text-sm leading-6 text-primary-foreground/75">
									Manage your personal information, track your
									orders and enjoy your shopping experience.
								</p>
							</div>

							<div className="flex size-20 shrink-0 items-center justify-center border border-primary-foreground/30 bg-primary-foreground/10">
								<UserRound size={42} strokeWidth={1.3} />
							</div>
						</section>

						{/* Statistics */}
						<section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
							{stats.map((stat) => {
								const Icon = stat.icon;

								return (
									<div
										key={stat.label}
										className="border border-border bg-surface p-5"
									>
										<div className="flex items-center justify-between">
											<div className="flex size-10 items-center justify-center bg-primary/10 text-primary">
												<Icon size={20} />
											</div>
											<span className="text-2xl font-semibold text-primary">
												{stat.value}
											</span>
										</div>

										<h3 className="mt-4 text-sm font-semibold text-foreground">
											{stat.label}
										</h3>
										<p className="mt-1 text-xs text-muted">
											{stat.description}
										</p>
									</div>
								);
							})}
						</section>

						{/* Personal Information */}
						<section className="border border-border bg-surface p-5 sm:p-6">
							<div className="mb-6 flex items-center justify-between border-b border-border pb-4">
								<div>
									<h2 className="text-lg font-semibold text-foreground">
										Personal Information
									</h2>
									<p className="mt-1 text-xs text-muted">
										Your basic account details
									</p>
								</div>

								<span className="border border-border px-4 py-2 text-xs font-medium text-primary">
									Edit Profile
								</span>
							</div>

							<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
								<div className="flex items-center gap-3">
									<UserRound className="text-primary" size={19} />
									<div>
										<p className="text-xs text-muted">Full Name</p>
										<p className="mt-1 text-sm font-medium text-foreground">
											Tusher Mia
										</p>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<Mail className="text-primary" size={19} />
									<div>
										<p className="text-xs text-muted">Email Address</p>
										<p className="mt-1 text-sm font-medium text-foreground">
											customer@example.com
										</p>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<Phone className="text-primary" size={19} />
									<div>
										<p className="text-xs text-muted">Phone Number</p>
										<p className="mt-1 text-sm font-medium text-foreground">
											+880 1XXXXXXXXX
										</p>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<MapPin className="text-primary" size={19} />
									<div>
										<p className="text-xs text-muted">Address</p>
										<p className="mt-1 text-sm font-medium text-foreground">
											Not added yet
										</p>
									</div>
								</div>
							</div>
						</section>

						{/* Recent Orders */}
						<section className="border border-border bg-surface p-5 sm:p-6">
							<div className="mb-5 flex items-center justify-between">
								<div>
									<h2 className="text-lg font-semibold text-foreground">
										Recent Orders
									</h2>
									<p className="mt-1 text-xs text-muted">
										Your latest shopping activity
									</p>
								</div>

								<span className="text-sm font-semibold text-primary">
									View All
								</span>
							</div>

							<div className="overflow-x-auto">
								<table className="w-full min-w-162.5 text-left text-sm">
									<thead>
										<tr className="border-y border-border bg-background text-xs text-muted">
											<th className="px-4 py-3 font-medium">Order ID</th>
											<th className="px-4 py-3 font-medium">Product</th>
											<th className="px-4 py-3 font-medium">Date</th>
											<th className="px-4 py-3 font-medium">Amount</th>
											<th className="px-4 py-3 font-medium">Status</th>
										</tr>
									</thead>

									<tbody>
										{orders.map((order) => (
											<tr
												key={order.id}
												className="border-b border-border last:border-0"
											>
												<td className="px-4 py-4 font-medium text-primary">
													{order.id}
												</td>
												<td className="px-4 py-4 text-foreground">
													{order.product}
												</td>
												<td className="px-4 py-4 text-muted">
													{order.date}
												</td>
												<td className="px-4 py-4 font-medium text-foreground">
													{order.amount}
												</td>
												<td className="px-4 py-4">
													<span
														className={`inline-block px-3 py-1 text-xs font-medium ${
															order.status === "Delivered"
																? "bg-success/10 text-success"
																: order.status === "Shipped"
																	? "bg-blue-50 text-blue-700"
																	: "bg-amber-50 text-amber-700"
														}`}
													>
														{order.status}
													</span>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</section>

					</div>
				</div>
			</div>
		</main>
	);
}
