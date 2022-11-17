import type { SwitchProps } from "./Switch.types";
import { clsx } from "clsx";
import type { ReactEventHandler } from "react";
import { useId } from "react";

const Switch = ({ value, onChange }: SwitchProps) => {
  const className = clsx({
    "cursor-pointer border-none inline-flex items-center w-10 rounded-full h-4 transition-all duration-50":
      true,
    "bg-gray-200 justify-end": value,
    "bg-gray-500 bg-opacity-50 justify-start": !value
  });
  const textClassName = "flex items-center text-[8px] select-none";
  const id = useId();

  const handleChange: ReactEventHandler<HTMLInputElement> = (e) => {
    const value = e.currentTarget.checked;
    onChange?.(value);
  };
  return (
    <label htmlFor={id} className={className}>
      <input
        type="checkbox"
        className="hidden"
        checked={value}
        onChange={handleChange}
        id={id}
      />
      <span
        className={clsx(textClassName, {
          hidden: !value,
          "pr-1 text-gray-600": value
        })}
      >
        ON
      </span>
      <span className="flex w-3 h-3 mx-1 bg-gray-900 rounded-full" />
      <span
        className={clsx(textClassName, {
          hidden: value,
          "pl-1 text-gray-500": !value
        })}
      >
        OFF
      </span>
    </label>
  );
};

export default Switch;
