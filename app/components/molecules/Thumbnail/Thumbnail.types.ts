import type { ReactNode } from "react";
export type ThumbnailProps = {
  src: string;
  children?: ReactNode;
  variant?: "normal" | "large" | "wider";
};
