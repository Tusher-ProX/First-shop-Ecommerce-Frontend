
import Image from "next/image";
import Link from "next/link";

import { aboutContent } from "@/src/data/about";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-cream">

            {/* Brand Story Section */}
            <section className="bg-card py-20">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">

                    {/* Story Image */}
                    <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
                        <Image
                            src={aboutContent.story.image}
                            alt={aboutContent.story.imageAlt}
                            fill
                            unoptimized
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Story Content */}
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
                            Who We Are
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold text-burgundy md:text-4xl">
                            {aboutContent.story.title}
                        </h2>

                        <div className="mt-8 space-y-5">
                            {aboutContent.story.paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-base leading-8 text-muted"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


            {/* Brand Highlights Section */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4">

                    {/* Highlights */}
                    <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
                        {aboutContent.highlights.items.map((item) => (
                            <div key={item.label}>
                                <h3 className="text-4xl font-semibold text-gold md:text-5xl">
                                    {item.number}
                                </h3>

                                <p className="mt-3 text-sm font-medium tracking-wide text-foreground">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Explore Collections */}
                    <div className="mt-14 text-center">
                        <h2 className="text-2xl font-semibold text-burgundy md:text-3xl">
                            {aboutContent.highlights.title}
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">
                            {aboutContent.highlights.description}
                        </p>

                        <Link
                            href={aboutContent.highlights.buttonLink}
                            className="mt-8 inline-flex rounded-md bg-burgundy px-7 py-3 font-medium text-white transition-colors hover:bg-gold hover:text-foreground"
                        >
                            {aboutContent.highlights.buttonText}
                        </Link>
                    </div>

                </div>
            </section>


            {/* Mission & Vision Section */}
            <section className="bg-cream py-20">
                <div className="mx-auto max-w-7xl px-4">

                    <div className="mb-12 text-center">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
                            What Drives Us
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold text-burgundy md:text-4xl">
                            Our Mission & Vision
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">

                        {/* Mission Card */}
                        <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
                            <h3 className="text-2xl font-semibold text-burgundy">
                                {aboutContent.mission.title}
                            </h3>

                            <p className="mt-5 leading-8 text-muted">
                                {aboutContent.mission.description}
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
                            <h3 className="text-2xl font-semibold text-burgundy">
                                {aboutContent.vision.title}
                            </h3>

                            <p className="mt-5 leading-8 text-muted">
                                {aboutContent.vision.description}
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* Our Values Section */}
            <section className="bg-card py-20">
                <div className="mx-auto max-w-7xl px-4">

                    <div className="mb-12 text-center">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
                            Our Core Values
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold text-burgundy md:text-4xl">
                            {aboutContent.values.title}
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {aboutContent.values.items.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-border bg-cream p-8 text-center transition-transform duration-300 hover:-translate-y-1"
                            >
                                <h3 className="text-xl font-semibold text-burgundy">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-7 text-muted">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}
