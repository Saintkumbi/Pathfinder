import { ChangeEvent } from "react";
import "./Nav.css"; 

export function Select({
    value,
    onChange,
    options,
    label,
    isDisabled,
}: {
    value: string | number;
    label: string;
    onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string | number; name: string }[];
    isDisabled?: boolean;
}) {
    return (
        <div className="flex flex-col items-start gap-1">
            <label className="text-xs text-black-300 ml-" htmlFor={label}>
                {label}
            </label>
            <select
                disabled={isDisabled}
                className="bg-gray-700 disabled:pointer-events-none rounded-md cursor-pointer transition ease-in active:ring-0 active:border-0 p-2 pr-8 min-w-[400px] sm:min-w-full lm-4"
                id={label}
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}