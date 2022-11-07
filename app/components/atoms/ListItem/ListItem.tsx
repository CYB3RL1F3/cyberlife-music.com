import clsx from "clsx";
import { theme } from "~/theme";
import type { ListItemProps } from "./ListItem.types";

const ListItem = ({ children, className, index }: ListItemProps) => {
  return (
    <li
      className={clsx(
        {
          [theme.linkSeparatorDash]: index > 0
        },
        className
      )}
    >
      {children}
    </li>
  );
};

export default ListItem;
