import type { Routes } from "~/routes/routes";
import type { ReactNode } from "react";

export type NavItemProps = {
  href: Routes;
  label: ReactNode;
};
