import type { ButtonProps } from "./Button.types";
import { useButtonStyle } from "~/hooks/styles/useButtonStyle";
import { useLinkStyle } from "~/hooks/styles/useLinkStyle";
import { clsx } from "clsx";
import { useMemo } from "react";

const Button = ({
  children,
  type = "button",
  disabled,
  onClick,
  title,
  rightIcon,
  variant = "button",
  className
}: ButtonProps) => {
  const buttonStyle = useButtonStyle(className);
  const linkStyle = useLinkStyle(clsx("bg-none border-none", className));
  const cls = useMemo(
    () =>
      clsx({
        [linkStyle]: variant === "link",
        [buttonStyle]: variant === "button"
      }),
    [buttonStyle, linkStyle, variant]
  );
  return (
    <button
      className={cls}
      type={type}
      title={title}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      {rightIcon && <span className="ml-2 min-w-[1rem]">{rightIcon}</span>}
    </button>
  );
};

export default Button;
