import LinkNavItemContainer from "~/components/molecules/LinkNavItemContainer";
import type { LinkNavItemListProps } from "./LinkNavItemList.types";
import { theme } from "~/theme";
import clsx from "clsx";
import ListItem from "~/components/atoms/ListItem/ListItem";

const LinkNavItemList = ({ items }: LinkNavItemListProps) => {
  return (
    <ul className="flex flex-col md:flex-row md:flex-end m-0 p-0">
      {items.map((item, index) => (
        <ListItem
          index={index}
          key={`menuItem__${item.href}`}
          className={clsx(
            "inline-flex list-none",
            theme.largeSemiBoldUppercase
          )}
        >
          <LinkNavItemContainer {...item} index={index} />
        </ListItem>
      ))}
    </ul>
  );
};

export default LinkNavItemList;
