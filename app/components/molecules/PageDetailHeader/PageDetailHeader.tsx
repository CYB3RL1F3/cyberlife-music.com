import { cn } from '~/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from '@remix-run/react';
import { HiArrowLeft } from 'react-icons/hi';

import Heading from '~/components/atoms/Heading';
import { useFluidTransition } from '~/hooks/misc/useFluidTransition';

import type { PageDetailHeaderProps } from './PageDetailHeader.types';

const PageDetailHeader = ({ title, url }: PageDetailHeaderProps) => {
  const transition = useFluidTransition({
    initial: {
      y: -5,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.25,
        when: 'beforeChildren',
      },
    },
    exit: {
      y: -5,
      opacity: 0,
      transition: {
        duration: 0.25,
        when: 'afterChildren',
      },
    },
  });

  const { key } = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        {...transition(0.75, 0.5)}
        key={`header__${key}`}
        id={`header__${key}`}
        className={cn(
          'z-20 flex justify-between w-full h-16 pt-4 pr-6 max-md:absolute',
        )}
      >
        {url && (
          <Link
            to={url}
            className="flex items-center justify-center w-4 h-5 text-lg font-semibold text-white cursor-pointer md:h-6 md:text-md md:w-16"
          >
            <HiArrowLeft />
          </Link>
        )}
        <Heading>{title}</Heading>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageDetailHeader;
