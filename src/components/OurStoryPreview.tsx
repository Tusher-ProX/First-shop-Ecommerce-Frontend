import Link from "next/link";
import { aboutContent } from "../data/about";

export default function OurStoryPreview() {
    return (
        <section className="bg-card px-4 py-16 sm:px-6 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                    About Our Brand
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-burgundy sm:text-4xl">
                    {aboutContent.story.title}
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                    {aboutContent.story.shortSummary}
                </p>

                <Link
                    href="/about"
                    className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 bg-burgundy px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-gold"
                >
                    Our Story
                    <span aria-hidden="true" className="text-lg">
                        →
                    </span>
                </Link>
            </div>
        </section>
    );
}