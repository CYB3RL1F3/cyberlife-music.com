import { useEffect } from 'react';
import { AnimatePresence, motion, useWillChange } from 'framer-motion';

import type { DisplayInfosProps } from './DisplayInfos.types';

const DisplayInfos = ({ infos }: DisplayInfosProps) => {
  const willChange = useWillChange();

  useEffect(() => {
    willChange.add('opacity filter');
  }, [willChange]);
  if (!infos.bio?.content) return null;

  return (
    <AnimatePresence>
      <article className="hidden mr-6 md:block">
        <p className={'font-semibold text-xs lg:text-sm leading-4 text-right '}>
          {infos.bio.content.split(' ').map((char, index) => {
            return (
              <motion.span
                initial={{ filter: 'blur(50px)', opacity: 0 }}
                animate={{
                  filter: ['blur(50px)', 'blur(30px)', 'blur(0)'],
                  opacity: [0, 1, 1],
                }}
                transition={{
                  duration: 0.4,
                  times: [0, 0.5, 1],
                  delay: 0.1 + index * 0.006,
                }}
                style={{ willChange }}
                key={`${char}-${index}`}
              >
                {char}{' '}
              </motion.span>
            );
          })}
        </p>
      </article>
    </AnimatePresence>
  );
};

const DisplayInfosSkeleton = () => {
  return (
    <div className="hidden mr-6 md:block">
      <div className="w-full h-4 mb-2 bg-gray-700 rounded animate-pulse" />
      <div className="w-full h-4 mb-2 bg-gray-700 rounded animate-pulse" />
      <div className="w-3/4 h-4 mb-2 bg-gray-700 rounded animate-pulse" />
    </div>
  );
};

DisplayInfos.Skeleton = DisplayInfosSkeleton;

export default DisplayInfos;
