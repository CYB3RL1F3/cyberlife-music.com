import type { MouseEventHandler } from "react";

export type WaveformProps = {
  src: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
