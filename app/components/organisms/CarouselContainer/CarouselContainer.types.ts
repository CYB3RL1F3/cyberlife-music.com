import type { ReactNode } from "react";
import type { CarouselProps } from "~/components/atoms/Carousel";

export type CarouselContainerProps = {
  children?: ReactNode;
  name?: string;
  index?: number;
  canDrag?: boolean;
  onChange: (index: number) => void;
  onDrag?: CarouselProps["onDrag"];
};
