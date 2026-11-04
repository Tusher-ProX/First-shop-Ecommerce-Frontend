type PriceRangeFilterProps = {
    minPriceLimit: number;
    maxPriceLimit: number;
    minPrice: number;
    maxPrice: number;
    onMinPriceChange: (value: number) => void;
    onMaxPriceChange: (value: number) => void;
};

const RANGE_INPUT_CLASSES = `
    pointer-events-none absolute inset-0 h-6 w-full cursor-pointer appearance-none bg-transparent
    [&::-webkit-slider-runnable-track]:appearance-none
    [&::-webkit-slider-runnable-track]:bg-transparent
    [&::-moz-range-track]:bg-transparent
    [&::-webkit-slider-thumb]:pointer-events-auto
    [&::-webkit-slider-thumb]:h-4
    [&::-webkit-slider-thumb]:w-4
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:border-2
    [&::-webkit-slider-thumb]:border-primary
    [&::-webkit-slider-thumb]:bg-surface
    [&::-moz-range-thumb]:pointer-events-auto
    [&::-moz-range-thumb]:h-4
    [&::-moz-range-thumb]:w-4
    [&::-moz-range-thumb]:appearance-none
    [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:border-2
    [&::-moz-range-thumb]:border-primary
    [&::-moz-range-thumb]:bg-surface
`;

export default function PriceRangeFilter({
    minPriceLimit,
    maxPriceLimit,
    minPrice,
    maxPrice,
    onMinPriceChange,
    onMaxPriceChange,
}: PriceRangeFilterProps) {
    const priceRange = Math.max(
        maxPriceLimit - minPriceLimit,
        1
    );

    const minPercent =
        ((minPrice - minPriceLimit) / priceRange) * 100;

    const maxPercent =
        ((maxPrice - minPriceLimit) / priceRange) * 100;

    const isMinOnTop =
        minPrice >= maxPrice &&
        minPrice > minPriceLimit + priceRange / 2;

    const handleMinChange = (value: number) => {
        onMinPriceChange(Math.min(value, maxPrice));
    };

    const handleMaxChange = (value: number) => {
        onMaxPriceChange(Math.max(value, minPrice));
    };

    return (
        <div className="border-b border-border py-5">
            <h3 className="mb-4 font-medium text-foreground">
                Price Range
            </h3>

            <div className="flex items-center justify-between text-sm text-muted">
                <span>
                    ৳ {minPrice.toLocaleString("en-BD")}
                </span>

                <span>
                    ৳ {maxPrice.toLocaleString("en-BD")}
                </span>
            </div>

            <div className="relative mt-5 h-6">
                <div className="absolute left-0 top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-border" />

                <div
                    className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-primary"
                    style={{
                        left: `${minPercent}%`,
                        width: `${Math.max(
                            maxPercent - minPercent,
                            0
                        )}%`,
                    }}
                />

                <input
                    type="range"
                    min={minPriceLimit}
                    max={maxPriceLimit}
                    value={minPrice}
                    aria-label="Minimum price"
                    onChange={(event) =>
                        handleMinChange(Number(event.target.value))
                    }
                    style={{ zIndex: isMinOnTop ? 40 : 20 }}
                    className={RANGE_INPUT_CLASSES}
                />

                <input
                    type="range"
                    min={minPriceLimit}
                    max={maxPriceLimit}
                    value={maxPrice}
                    aria-label="Maximum price"
                    onChange={(event) =>
                        handleMaxChange(Number(event.target.value))
                    }
                    style={{ zIndex: 30 }}
                    className={RANGE_INPUT_CLASSES}
                />
            </div>
        </div>
    );
}