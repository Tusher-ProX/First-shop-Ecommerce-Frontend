
import {
	Mail,
	Phone,
	MapPin,
	Clock,
	Send,
	MessageCircle,
} from "lucide-react";

const contactInfo = [
	{
		title: "Email Address",
		detail: "support@shareescanvas.com",
		description: "Send us your queries anytime",
		icon: Mail,
	},
	{
		title: "Phone Number",
		detail: "+880 1XXXXXXXXX",
		description: "Call us during business hours",
		icon: Phone,
	},
	{
		title: "Our Location",
		detail: "Bangladesh",
		description: "Serving customers across Bangladesh",
		icon: MapPin,
	},
];

export default function ContactPage() {
	return (
		<main className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:py-14">
			<div className="mx-auto max-w-7xl">

				{/* Hero */}
				<section className="bg-primary px-6 py-12 text-center text-primary-foreground sm:px-10 sm:py-16">
					<p className="text-sm font-medium text-accent">
						WE ARE HERE FOR YOU
					</p>

					<h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
						Get in Touch
					</h1>

					<p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-primary-foreground/75">
						Have a question about our collections or need help
						with your order? We would love to hear from you.
					</p>
				</section>

				{/* Contact Information */}
				<section className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
					{contactInfo.map((item) => {
						const Icon = item.icon;

						return (
							<div
								key={item.title}
								className="border border-border bg-surface p-6 text-center"
							>
								<div className="mx-auto flex size-12 items-center justify-center bg-primary/10 text-primary">
									<Icon size={23} />
								</div>

								<h2 className="mt-4 font-semibold text-foreground">
									{item.title}
								</h2>

								<p className="mt-2 wrap-break-word text-sm font-medium text-primary">
									{item.detail}
								</p>

								<p className="mt-2 text-xs text-muted">
									{item.description}
								</p>
							</div>
						);
					})}
				</section>

				{/* Contact Form and Details */}
				<section className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">

					{/* Contact Form */}
					<div className="border border-border bg-surface p-5 sm:p-8 lg:col-span-3">
						<div className="mb-7">
							<h2 className="text-2xl font-semibold text-foreground">
								Send Us a Message
							</h2>

							<p className="mt-2 text-sm text-muted">
								Fill out the form below and our team will
								get back to you.
							</p>
						</div>

						<form className="space-y-5">
							<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
								<div>
									<label
										htmlFor="name"
										className="mb-2 block text-sm font-medium text-foreground"
									>
										Full Name
									</label>

									<input
										id="name"
										type="text"
										placeholder="Enter your name"
										className="w-full border border-border bg-surface px-4 py-3 text-sm outline-none placeholder:text-muted/70 focus:border-primary"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="mb-2 block text-sm font-medium text-foreground"
									>
										Email Address
									</label>

									<input
										id="email"
										type="email"
										placeholder="Enter your email"
										className="w-full border border-border bg-surface px-4 py-3 text-sm outline-none placeholder:text-muted/70 focus:border-primary"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="subject"
									className="mb-2 block text-sm font-medium text-foreground"
								>
									Subject
								</label>

								<input
									id="subject"
									type="text"
									placeholder="What is your message about?"
									className="w-full border border-border bg-surface px-4 py-3 text-sm outline-none placeholder:text-muted/70 focus:border-primary"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="mb-2 block text-sm font-medium text-foreground"
								>
									Your Message
								</label>

								<textarea
									id="message"
									rows={6}
									placeholder="Write your message here..."
									className="w-full resize-none border border-border bg-surface px-4 py-3 text-sm outline-none placeholder:text-muted/70 focus:border-primary"
								/>
							</div>

							<button
								type="button"
								className="flex w-full items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 sm:w-auto"
							>
								Send Message
								<Send size={16} />
							</button>
						</form>
					</div>

					{/* Additional Information */}
					<aside className="space-y-6 lg:col-span-2">
						<div className="border border-border bg-surface p-6">
							<div className="flex items-center gap-3">
								<div className="flex size-11 items-center justify-center bg-primary/10 text-primary">
									<Clock size={22} />
								</div>

								<h2 className="text-lg font-semibold text-foreground">
									Business Hours
								</h2>
							</div>

							<div className="mt-6 space-y-4 text-sm">
								<div className="flex justify-between gap-3 border-b border-border pb-3">
									<span className="text-muted">
										Saturday – Thursday
									</span>

									<span className="font-medium text-foreground">
										9 AM – 8 PM
									</span>
								</div>

								<div className="flex justify-between gap-3">
									<span className="text-muted">Friday</span>

									<span className="font-medium text-foreground">
										Closed
									</span>
								</div>
							</div>

							<p className="mt-5 text-xs leading-6 text-muted">
								Our customer support team is happy to
								assist you with your shopping experience.
							</p>
						</div>

						<div className="border border-border bg-surface p-6">
							<div className="flex items-center gap-3">
								<div className="flex size-11 items-center justify-center bg-primary/10 text-primary">
									<MessageCircle size={22} />
								</div>

								<h2 className="text-lg font-semibold text-foreground">
									Need Assistance?
								</h2>
							</div>

							<p className="mt-4 text-sm leading-7 text-muted">
								Whether you need product information,
								order assistance or styling suggestions,
								we are here to help.
							</p>
						</div>

						{/* Map Placeholder */}
						<div className="flex min-h-52 flex-col items-center justify-center border border-border bg-surface-muted p-6 text-center">
							<MapPin size={32} className="text-primary" />

							<h3 className="mt-3 font-semibold text-foreground">
								Sharee&apos;s Canvas
							</h3>

							<p className="mt-2 text-xs text-muted">
								Our location information will be added here.
							</p>
						</div>
					</aside>
				</section>
			</div>
		</main>
	);
}
