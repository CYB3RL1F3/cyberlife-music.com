import type { PanInfo } from "framer-motion";
import type { ReactNode } from "react";

export type CarouselProps = {
  children?: ReactNode;
  index: number;
  nbItems: number;
  canDrag?: boolean;
  onDrag?: (e: DragEvent, info: PanInfo) => void;
};
