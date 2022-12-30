import type { ReactNode } from "react";
import type { ListItemProps } from "~/components/molecules/ListItem/ListItem.types";

export type IconLink = {
  url: string;
  icon: ReactNode;
};

export type PageDetailLayoutProps = {
  linkIcons: ReactNode;
  children?: ReactNode;
  thumbnail: ListItemProps["thumbnail"];
};
