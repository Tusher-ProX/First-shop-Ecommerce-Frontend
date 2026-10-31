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
            <p className="mb-3 text-sm font-medium text-[#3D2925]">
                Blouse Piece
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
                <button
                    type="button"
                    onClick={() => onChange(true)}
                    aria-pressed={selected}
                    className={`flex-1 border p-4 text-left transition-colors ${
                        selected
                            ? "border-burgundy bg-burgundy/5"
                            : "border-[#E8DDD2]"
                    }`}
                >
                    <span className="block font-medium text-[#3D2925]">
                        Add Blouse Piece
                    </span>
                    <span className="mt-1 block text-sm text-gray-500">
                        +৳{price.toLocaleString("en-BD")}
                    </span>
                </button>

                <button
                    type="button"
                    onClick={() => onChange(false)}
                    aria-pressed={!selected}
                    className={`flex-1 border p-4 text-left transition-colors ${
                        !selected
                            ? "border-burgundy bg-burgundy/5"
                            : "border-[#E8DDD2]"
                    }`}
                >
                    <span className="block font-medium text-[#3D2925]">
                        Without Blouse Piece
                    </span>
                    <span className="mt-1 block text-sm text-gray-500">
                        No extra charge
                    </span>
                </button>
            </div>
        </div>
    );
}
