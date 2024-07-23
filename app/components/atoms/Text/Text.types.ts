import type { ReactNode } from "react";

export type TextProps = {
  children?: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  align?: "left" | "center" | "right";
  fontStyle?: "italic" | "normal";
  weight?: "semibold" | "normal";
  isUppercase?: boolean;
  className?: string;
};

export type FormattedTextProps = Pick<TextProps, "children" | "className">;
