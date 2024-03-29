import type { ReactNode } from "react";

export type BackgroundImageProps = {
  src: string;
  className?: string;
  children?: ReactNode;
  backgroundType?: "bg-cover" | "bg-contain";
};
