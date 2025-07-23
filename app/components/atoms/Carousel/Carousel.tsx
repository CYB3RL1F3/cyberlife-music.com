import { Children, useRef, useEffect, useMemo, useState } from 'react';
import type { CarouselProps } from './Carousel.types';
import type { ValueAnimationOptions } from 'framer-motion';
import {
  AnimatePresence,
  useMotionValue,
  motion,
  animate,
} from 'framer-motion';
import { useResize } from '~/hooks/useResize';

const transition: ValueAnimationOptions<number> = {
  keyframes: [0, 1],
  type: 'tween',
};

const Carousel = ({
  index,
  canDrag = true,
  children,
  onDrag,
}: CarouselProps) => {
  const childrenArray = useMemo(() => Children.toArray(children), [children]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemSize, setItemSize] = useState(
    containerRef.current?.clientWidth || 0,
  );

  useResize(() => {
    setTimeout(() => {
      setItemSize(containerRef.current?.clientWidth || 0);
    }, 200);
  });
  useEffect(() => {
    setTimeout(() => {
      setItemSize(containerRef.current?.clientWidth || 0);
    }, 200);
  });

  const width = useMemo(
    () => itemSize * childrenArray.length,
    [childrenArray, itemSize],
  );
  const currentX = useMemo(() => (-index + 0) * itemSize, [index, itemSize]);
  const x = useMotionValue(currentX);
  if (typeof window === 'undefined') return null;
  animate(x, currentX, transition);

  return (
    <div className="relative w-full h-full overflow-hidden" ref={containerRef}>
      <div className="absolute w-full h-full blur" />
      <AnimatePresence>
        <motion.div
          className={`absolute w-fit flex`}
          dragElastic={0.3}
          drag={canDrag ? 'x' : undefined}
          dragConstraints={{ left: -width, right: 0 }}
          style={{ x, width }}
          onDragEnd={onDrag}
        >
          {childrenArray.map((child, index) => (
            <div key={`carousel__${index}`} style={{ width: `${itemSize}px` }}>
              {child}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
