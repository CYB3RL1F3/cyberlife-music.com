import type { Routes } from "~/routes/routes";
import type { ReactNode } from "react";

export type LinkNavItemProps = {
  href: Routes;
  label: ReactNode;
};
