import type { ReactNode } from "react";

export type AnchorProps = {
  children?: ReactNode;
  href: string | null;
  target?: "_blank" | "_self";
  className?: string;
};
