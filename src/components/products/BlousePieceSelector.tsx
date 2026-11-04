"use client";

type BlousePieceSelectorProps = {
    available: boolean;
    price: number;
    selected: boolean;
    onChange: (selected: boolean) => void;
};

export default function BlousePieceSelector({
    available,
    price,
    selected,
    onChange,
}: BlousePieceSelectorProps) {
    if (!available) {
        return null;
    }

    return (
        <div className="mt-6">
            <p className="mb-3 text-sm font-medium text-foreground">
                Blouse Piece
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
                <button
                    type="button"
                    onClick={() => onChange(true)}
                    aria-pressed={selected}
                    className={`flex-1 border p-4 text-left transition-colors ${
                        selected
                            ? "border-primary bg-primary/5"
                            : "border-border"
                    }`}
                >
                    <span className="block font-medium text-foreground">
                        Add Blouse Piece
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                        +৳{price.toLocaleString("en-BD")}
                    </span>
                </button>

                <button
                    type="button"
                    onClick={() => onChange(false)}
                    aria-pressed={!selected}
                    className={`flex-1 border p-4 text-left transition-colors ${
                        !selected
                            ? "border-primary bg-primary/5"
                            : "border-border"
                    }`}
                >
                    <span className="block font-medium text-foreground">
                        Without Blouse Piece
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                        No extra charge
                    </span>
                </button>
            </div>
        </div>
    );
}
