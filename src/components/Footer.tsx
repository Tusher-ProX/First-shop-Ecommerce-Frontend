import Link from "next/link";

import { footerContent } from "@/src/data/footer";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="bg-burgundy text-white">
            <div className="mx-auto max-w-7xl px-4 py-16">

                {/* Main Footer Content */}
                <div className="grid grid-cols-3 gap-x-5 gap-y-10 lg:grid-cols-5 lg:gap-10">

                    {/* Brand Information */}
                    <div>
                        <h2 className="text-2xl font-semibold">
                            {footerContent.brand.name}
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-white/75">
                            {footerContent.brand.description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold">Quick Links</h3>

                        <ul className="mt-5 space-y-3 text-sm text-white/75">
                            {footerContent.quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="transition-colors hover:text-gold"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div>
                        <h3 className="text-lg font-semibold">Customer Care</h3>

                        <ul className="mt-5 space-y-3 text-sm text-white/75">
                            {footerContent.customerCare.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="transition-colors hover:text-gold"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-lg font-semibold">Contact Us</h3>

                        <ul className="mt-5 space-y-4 text-sm text-white/75">
                            <li>
                                <span className="block text-white/50">Email</span>
                                <a
                                    href={`mailto:${footerContent.contact.email}`}
                                    className="block break-all transition-colors hover:text-gold"
                                >
                                    {footerContent.contact.email}
                                </a>
                            </li>

                            <li>
                                <span className="block text-white/50">Phone</span>
                                <a
                                    href={`tel:${footerContent.contact.phone}`}
                                    className="transition-colors hover:text-gold"
                                >
                                    {footerContent.contact.phone}
                                </a>
                            </li>

                            <li>
                                <span className="block text-white/50">Address</span>
                                <p>{footerContent.contact.address}</p>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div className="min-w-0">
                        <h3 className="text-lg font-semibold">Follow Us</h3>

                        <div className="mt-5 flex flex-col gap-3 text-sm text-white/75">
                            {footerContent.socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors hover:text-gold"
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom Footer Section */}
                <div className="mt-10 grid grid-cols-1 items-center gap-5 border-t border-white/20 pt-6 lg:grid-cols-3">

                    {/* Copyright */}
                    <div className="text-center text-sm text-white/65 lg:text-left">
                        <p>
                            © {currentYear} {footerContent.copyright}
                        </p>

                        <p className="mt-1">
                            Developed by{" "}
                            <Link
                                href="https://github.com/Tusher-ProX"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-gold transition-colors hover:text-white"
                            >
                                TusherProX
                            </Link>
                        </p>
                    </div>

                    {/* Policy Links */}
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/65">
                        {footerContent.policies.map((policy) => (
                            <Link
                                key={policy.name}
                                href={policy.href}
                                className="transition-colors hover:text-gold"
                            >
                                {policy.name}
                            </Link>
                        ))}
                    </div>

                    {/* Payment Partners */}
                    <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-end">
                        <span className="text-sm font-medium text-white/75">
                            Payment Partners:
                        </span>

                        {footerContent.paymentMethods.map((method) => (
                            <span
                                key={method.name}
                                className="text-sm font-medium text-white/90 transition-colors hover:text-gold"
                            >
                                {method.name}
                            </span>
                        ))}
                    </div>

                </div>

            </div>
        </footer>
    );
}
