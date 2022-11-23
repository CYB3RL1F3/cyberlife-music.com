import type { ReactNode } from "react";
export type ServerOnlyProps = {
  children(): ReactNode;
  fallback?: ReactNode;
};
