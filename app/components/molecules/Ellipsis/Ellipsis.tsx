import clsx from "clsx";
import type { EllipsisProps } from "./Ellipsis.types";

const Ellipsis = ({ children, className }: EllipsisProps) => {
  return (
    <p className={clsx(className, "line-clamp-3 md:line-clamp-2")}>
      {children}
    </p>
  );
};

export default Ellipsis;
