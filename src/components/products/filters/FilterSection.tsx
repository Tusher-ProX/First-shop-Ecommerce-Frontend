import type { ReactNode } from "react";

type FilterSectionProps = {
    title: string;
    children: ReactNode;
    className?: string;
};

export default function FilterSection({
    title,
    children,
    className = "border-b border-border py-5",
}: FilterSectionProps) {
    return (
        <div className={className}>
            <h3 className="mb-4 font-medium text-foreground">
                {title}
            </h3>

            {children}
        </div>
    );
}