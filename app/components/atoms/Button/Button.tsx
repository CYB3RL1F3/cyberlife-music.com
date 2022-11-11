import type { ButtonProps } from "./Button.types";
import { clsx } from "clsx";
import { useMemo } from "react";

const Button = ({
  children,
  type = "button",
  disabled,
  onClick,
  rightIcon,
  className
}: ButtonProps) => {
  const buttonClassName = useMemo(
    () =>
      clsx(
        "transition-all duration-50 italic h-12 px-4 text-md p-2 text-gray-400 rounded hover:text-gray-200 leading-4 flex items-center border-none bg-gray-600 bg-opacity-80 hover:bg-opacity-90 cursor-pointer outline-none",
        className
      ),
    [className]
  );
  return (
    <button
      className={buttonClassName}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      {rightIcon && <span className="ml-2 min-w-[1rem]">{rightIcon}</span>}
    </button>
  );
};

export default Button;
