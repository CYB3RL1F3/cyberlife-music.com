import { AnimatePresence, motion, useWillChange } from 'framer-motion';
import { ApplicationOutletProps } from './ApplicationOutlet.types';
import { useLocation, useOutlet } from '@remix-run/react';
import { useContainerScrollContext } from '~/components/contexts/ContainerScrollContext/ContainerScrollContext';

export const ApplicationOutlet = ({ children }: ApplicationOutletProps) => {
  const willChange = useWillChange();
  const outlet = useOutlet();
  willChange.add('transform, opacity');
  const { key } = useLocation();
  const { setScrollY } = useContainerScrollContext();

  const handleExitComplete = () => {
    setScrollY(0);
  };

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={handleExitComplete}
      custom={{
        initial: { opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { when: 'beforeChildren' } },
        exit: { opacity: 0.8, transition: { when: 'afterChildren' } },
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className="max-md:min-h-[calc(100vh_-_21rem)]"
        key={key}
        style={{ willChange }}
      >
        {children ?? outlet}
      </motion.div>
    </AnimatePresence>
  );
};

export default ApplicationOutlet;
