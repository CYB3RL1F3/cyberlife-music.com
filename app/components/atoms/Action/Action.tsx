import clsx from "clsx";
import type { ActionProps } from "./Action.types";

const Action = ({
  children,
  onClick,
  style,
  title,
  disabled,
  type = 'button',
  className
}: ActionProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx("border-none bg-none cursor-pointer", className)}
      style={style}
      title={title}
    >
      {children}
    </button>
  );
};

export default Action;
