import { ReactNode } from "react";
import type { LinkNavItemProps } from "~/components/atoms/LinkNavItem/LinkNavItem.types";

export type LinkNavItemListProps = {
  items: LinkNavItemProps[];
  onChange?: () => void;
  extra?: ReactNode;
};
