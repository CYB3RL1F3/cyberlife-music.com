import type { ReactNode } from "react";
import type { ListItemProps } from "~/components/molecules/ListItem/ListItem.types";
import type { ListLinkIconsProps } from "~/components/molecules/ListLinkIcons/ListLinkIcons.types";

export type IconLink = {
  url: string;
  icon: ReactNode;
};

export type PageDetailLayoutProps = {
  linkIcons: ListLinkIconsProps["linkIcons"];
  children?: ReactNode;
  thumbnail: ListItemProps["thumbnail"];
};
