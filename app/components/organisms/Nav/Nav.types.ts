import type { ReactNode } from "react";
import type { Routes } from "~/routes/routes";

export type NavProps = {
  children?: ReactNode;
  routes: Routes[];
};
