import type { ValueAnimationOptions } from 'framer-motion';
import { motion, useMotionValue, animate } from 'framer-motion';
import {
  Children,
  useRef,
  useMemo,
  useLayoutEffect,
  useEffect,
  useState,
} from 'react';

import type { CarouselProps } from './Carousel.types';

const transition = {
  type: 'tween',
  duration: 0.28,
  ease: 'easeOut',
} as ValueAnimationOptions<number>;

const Carousel = ({
  index,
  canDrag = true,
  children,
  onDrag,
}: CarouselProps) => {
  const items = useMemo(() => Children.toArray(children), [children]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Largeur visible (viewport)
  const [viewport, setViewport] = useState(0);

  // Mesure robuste (client-only), évite le 0 au premier render
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      setViewport(w);
    });
    ro.observe(el);
    // kickstart immédiat
    setViewport(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  // Largeur totale du contenu
  const contentWidth = useMemo(
    () => (viewport > 0 ? viewport * items.length : 0),
    [viewport, items.length],
  );

  // Cible en px pour l'index courant
  const targetX = useMemo(() => -index * viewport, [index, viewport]);

  // Bornes: left <= 0, right = 0
  const leftBound = useMemo(() => {
    const left = -(contentWidth - viewport);
    // si contenu plus petit que viewport -> pas de défilement
    return Number.isFinite(left) ? Math.min(0, left) : 0;
  }, [contentWidth, viewport]);

  // Clamp pour rester dans les bornes
  const clampedX = useMemo(
    () => Math.max(leftBound, Math.min(0, targetX)),
    [targetX, leftBound],
  );

  // Position x animée
  const x = useMotionValue(0);
  const didInitRef = useRef(false);

  // 1) Position initiale SANS animation quand on a une largeur
  useEffect(() => {
    if (viewport <= 0 || contentWidth <= 0) return;
    if (!didInitRef.current) {
      x.set(clampedX);
      didInitRef.current = true;
      return;
    }
    const controls = animate(x, clampedX, transition);
    return controls.stop;
  }, [viewport, contentWidth, clampedX, x]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 flex h-full"
        style={{ x, width: contentWidth }}
        drag={canDrag && contentWidth > viewport ? 'x' : false}
        dragConstraints={{ left: leftBound, right: 0 }}
        dragElastic={0.28}
        dragMomentum={false}
        onDragEnd={onDrag}
      >
        {items.map((child, i) => (
          <div
            key={`carousel__${i}`}
            style={{ width: viewport, height: '100%', flex: '0 0 auto' }}
          >
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
