import clsx from "clsx";
import type { InlineListItemProps } from "./InlineListItem.types";

const InlineListItem = ({
  children,
  className,
  index
}: InlineListItemProps) => {
  return (
    <li
      className={clsx(
        {
          "inline-flex before:content-['-'] before:w-4 before:text-center":
            index > 0
        },
        className
      )}
    >
      {children}
    </li>
  );
};

export default InlineListItem;
