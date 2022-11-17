import { Children, useRef, useMemo } from "react";
import type { CarouselProps } from "./Carousel.types";
import type { AnimationOptions } from "framer-motion";
import {
  AnimatePresence,
  useMotionValue,
  motion,
  animate
} from "framer-motion";

const transition: AnimationOptions<number> = {
  type: "spring",
  bounce: 0
};

const Carousel = ({ index, children }: CarouselProps) => {
  console.log("INDEX >>>> ", index);
  const childrens = useMemo(() => Children.toArray(children), [children]);
  console.log(childrens);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemSize = containerRef.current?.clientWidth || 0;
  const width = useMemo(
    () => itemSize * childrens.length,
    [childrens, itemSize]
  );
  const currentX = useMemo(() => (-index + 0) * itemSize, [index, itemSize]);
  const x = useMotionValue(currentX);
  animate(x, currentX, transition);

  return (
    <div className="relative w-full h-full overflow-hidden" ref={containerRef}>
      <div className="absolute w-full h-full blur" />
      <AnimatePresence>
        <motion.div
          className={`absolute w-fit flex`}
          dragElastic={0.3}
          style={{ x, width }}
        >
          {childrens.map((child) => (
            <div key={child.toString()} style={{ width: `${itemSize}px` }}>
              {child}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
