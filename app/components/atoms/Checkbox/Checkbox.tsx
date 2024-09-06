import type { CheckboxProps } from "./Checkbox.types";
import { clsx } from "clsx";
import type { ReactEventHandler } from "react";
import Icon from "../Icon";
import { FaCheck } from "react-icons/fa6";

const Checkbox = ({ value, className, onChange, id }: CheckboxProps) => {
  const style = clsx(
    "cursor-pointer border-none inline-flex items-center transition-all duration-200",
    {
      "bg-gray-500 text-white": value,
      "bg-gray-200 text-gray-500": !value,
    }
  );

  const handleChange: ReactEventHandler<HTMLInputElement> = (e) => {
    const checked = e.currentTarget.checked;
    onChange?.(checked);
  };

  return (
    <label htmlFor={id} className={clsx("flex items-center cursor-pointer", className)}>
      <input
        type="checkbox"
        className="hidden"
        checked={value}
        onChange={handleChange}
        id={id}
      />
      <span className={clsx(style, "w-4 h-4 flex justify-center items-center rounded-xs")}>
        {value && <Icon icon={<FaCheck className="text-white" />} size={12} />}
      </span>
    </label>
  );
};

export default Checkbox;