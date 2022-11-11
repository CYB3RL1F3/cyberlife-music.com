import type { MouseEventHandler } from "react";

export type AutoCompleteItemProps = {
  value: string;
  isHover: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
