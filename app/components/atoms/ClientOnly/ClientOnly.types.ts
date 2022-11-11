import type { ReactNode } from "react";
export type ClientOnlyProps = {
  children(): ReactNode;
  fallback?: ReactNode;
};
