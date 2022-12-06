import clsx from "clsx";
import type { ActionProps } from "./Action.types";

const Action = ({
  children,
  onClick,
  style,
  title,
  disabled,
  className
}: ActionProps) => {
  return (
    <button
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
