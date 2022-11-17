import type { LinkNavItemProps } from "~/components/atoms/LinkNavItem/LinkNavItem.types";

export type LinkNavItemContainerProps = LinkNavItemProps & {
  index?: number;
  onChange?: () => void;
};
