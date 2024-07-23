import type { ReactNode } from "react";
export type ListProps = {
  children?: ReactNode;
  noBorder?: (index: number) => boolean;
};
