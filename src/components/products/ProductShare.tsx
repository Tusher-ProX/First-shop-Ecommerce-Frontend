"use client";

import { Share2, Copy } from "lucide-react";

type ProductShareProps = {
    productName: string;
};

export default function ProductShare({ productName }: ProductShareProps) {
    const shareUrl =
        typeof window !== "undefined" ? window.location.href : "";

    const shareText = `Check out ${productName}! ${shareUrl}`;

    const handleInstagramShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: productName,
                    text: shareText,
                    url: shareUrl,
                });
            } catch {
                // User cancelled sharing.
            }
        } else {
            await copyLink();
            alert("Link copied! You can share it on Instagram.");
        }
    };

    const shareOnWhatsApp = () => {
        const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const shareOnFacebook = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
        } catch {
            alert("Could not copy the link. Please copy it from the address bar.");
        }
    };

    return (
        <div className="mt-5 border-t border-[#E8DDD2] pt-5">
            <p className="mb-3 flex items-center gap-2 text-sm font-medium text-[#3D2925]">
                <Share2 size={17} />
                Share Product
            </p>

            <div className="flex items-center gap-3">
                {/* WhatsApp */}
                <button
                    type="button"
                    onClick={shareOnWhatsApp}
                    aria-label="Share on WhatsApp"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110"
                >
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                        <path d="M12.04 2A9.94 9.94 0 0 0 3.5 17.04L2 22l5.12-1.34A10 10 0 1 0 12.04 2Zm0 18.2a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.04.8.81-2.96-.2-.31A8.18 8.18 0 1 1 12.04 20.2Zm4.49-6.13c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.56.13-.17.25-.65.81-.8.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.24-.74-.65-1.24-1.46-1.39-1.71-.15-.25-.02-.39.11-.52.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09s.9 2.42 1.03 2.59c.12.17 1.76 2.69 4.27 3.77.6.26 1.06.42 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z"/>
                    </svg>
                </button>

                {/* Facebook */}
                <button
                    type="button"
                    onClick={shareOnFacebook}
                    aria-label="Share on Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform hover:scale-110"
                >
                    <span className="text-2xl font-bold">f</span>
                </button>

                {/* Instagram */}
                <button
                    type="button"
                    onClick={handleInstagramShare}
                    aria-label="Share on Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-tr from-[#FFB13D] via-[#E4405F] to-[#833AB4] text-white transition-transform hover:scale-110"
                >
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="5"/>
                        <circle cx="12" cy="12" r="4"/>
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                    </svg>
                </button>

                {/* Copy Link */}
                <button
                    type="button"
                    onClick={copyLink}
                    aria-label="Copy product link"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-burgundy text-cream transition-transform hover:scale-110"
                >
                    <Copy size={19} />
                </button>
            </div>
        </div>
    );
}
