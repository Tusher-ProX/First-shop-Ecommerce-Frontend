import { useEffect } from "react";

export function useEscapeKey(onEscape: () => void) {
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key !== "Escape") return;

            onEscape();
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, [onEscape]);
}