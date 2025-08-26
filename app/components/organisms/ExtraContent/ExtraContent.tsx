import PlayerWidget from '~/components/organisms/PlayerWidget';
import NotificationActivationSwitch from '~/components/organisms/NotificationActivationSwitch';
import { AnimatePresence, motion } from 'framer-motion';
import ClientOnly from '~/components/atoms/ClientOnly';

const ExtraContent = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '-50vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.25, ease: 'easeInOut' }}
        className="flex items-end justify-end w-full h-full gap-4 pl-4 md:flex-col md:py-4"
      >
        <div className="w-full max-md:hidden">
          <ClientOnly>{() => <PlayerWidget />}</ClientOnly>
        </div>
        <div className="flex justify-end w-full md:justify-start">
          <NotificationActivationSwitch id="NotificationActivationSwitch" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExtraContent;
