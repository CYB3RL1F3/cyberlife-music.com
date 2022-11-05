import NavItemContainer from "~/components/molecules/NavItemContainer";
import type { NavItemListProps } from "./NavItemList.types";

const NavItemList = ({ items }: NavItemListProps) => {
  return (
    <ul className="flex flex-col md:flex-row gap-4 md:flex-end m-0 p-0">
      {items.map((item, index) => (
        <li key={`menuItem__${item.href}`} className="inline-flex list-none">
          <NavItemContainer {...item} index={index} />
        </li>
      ))}
    </ul>
  );
};

export default NavItemList;
