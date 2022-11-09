import clsx from "clsx";
import type { ActionProps } from "./Action.types";

const Action = ({ children, onClick, style, className }: ActionProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx("border-none bg-none cursor-pointer", className)}
      style={style}
    >
      {children}
    </button>
  );
};

export default Action;
