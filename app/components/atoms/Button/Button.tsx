import type { ButtonProps } from "./Button.types";
import { useButtonStyle } from "~/hooks/styles/useButtonStyle";

const Button = ({
  children,
  type = "button",
  disabled,
  onClick,
  rightIcon,
  className
}: ButtonProps) => {
  const buttonClassName = useButtonStyle(className);
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
