import type { ReactNode } from "react";

export type TailwindGridTemplate = `grid-cols-[${string}]`

export type TableProps = {
  children: ReactNode;
  className?: string;
  template?: TailwindGridTemplate;
}

export type TableContextType = {
  template: string;
}