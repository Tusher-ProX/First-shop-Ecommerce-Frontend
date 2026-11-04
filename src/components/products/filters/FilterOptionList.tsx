import type {
    FilterOption,
    ColorFilterOption,
} from "@/src/data/mock/filterOptions";

type FilterOptionListProps = {
    options: FilterOption[] | ColorFilterOption[];
    selectedOptions: string[];
    onChange: (value: string, checked: boolean) => void;
    valueKey: "id" | "name";
    colorOptions?: boolean;
};

function getOptionValue(
    option: FilterOption | ColorFilterOption,
    valueKey: "id" | "name"
): string {
    return valueKey === "id" ? option.id : option.name;
}

export default function FilterOptionList({
    options,
    selectedOptions,
    onChange,
    valueKey,
    colorOptions = false,
}: FilterOptionListProps) {
    return (
        <div className="space-y-3">
            {options.map((option) => {
                const value = getOptionValue(option, valueKey);

                return (
                    <label
                        key={option.id}
                        className="flex cursor-pointer items-center gap-3 text-sm text-muted"
                    >
                        <input
                            type="checkbox"
                            checked={selectedOptions.includes(value)}
                            onChange={(event) =>
                                onChange(
                                    value,
                                    event.target.checked
                                )
                            }
                            className="accent-primary"
                        />

                        {colorOptions && "hex" in option && (
                            <span
                                className="h-4 w-4 rounded-full border border-border"
                                style={{
                                    backgroundColor: option.hex,
                                }}
                            />
                        )}

                        {option.name}
                    </label>
                );
            })}
        </div>
    );
}