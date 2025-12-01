import { AnimatePresence, motion, useWillChange } from 'framer-motion';
import { useLocation } from '@remix-run/react';

import { useFluidTransition } from '~/hooks/misc/useFluidTransition';
import ButtonLinkBuyRelease from '~/components/organisms/ButtonLinkBuyRelease';

import { ReleasesPageHeaderProps } from './ReleasesPageHeader.types';

const ReleasesPageHeader = ({ id }: ReleasesPageHeaderProps) => {
  const { key } = useLocation();
  const willChange = useWillChange();
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
    style: { willChange },
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        {...transition(0.75, 0.5)}
        id={id}
        key={`release__header__${key}`}
        className="flex justify-end h-16 pt-4 mr-6"
      >
        <ButtonLinkBuyRelease />
      </motion.div>
    </AnimatePresence>
  );
};

export default ReleasesPageHeader;
