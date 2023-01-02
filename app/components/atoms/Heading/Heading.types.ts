import type { ReactNode } from "react";

export type HeadingProps = {
  children?: ReactNode;
  variant?: "italic" | "normal";
  className?: string;
};
