import type { LinkNavItemProps } from "~/components/atoms/LinkNavItem/LinkNavItem.types";

export type LinkNavItemListProps = {
  items: LinkNavItemProps[];
  onChange?: () => void;
};
