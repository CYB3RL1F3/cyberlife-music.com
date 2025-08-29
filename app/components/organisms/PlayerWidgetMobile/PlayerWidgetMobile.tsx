import { motion } from 'framer-motion';
import { usePlayerTrackVisibility } from '~/hooks/player/usePlayerTrackVisibility';
import PlayerCurrentTrackContainer from '~/components/organisms/PlayerCurrentTrackContainer';

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0.5, y: 50 },
};

const PlayerWidgetMobile = () => {
  const { showExternalPlayer } = usePlayerTrackVisibility();
  return (
    <div className="fixed bottom-0 z-10 w-screen h-12">
      <motion.div
        className="flex w-screen h-12 bg-black md:hidden bg-opacity-80"
        animate={showExternalPlayer ? 'open' : 'closed'}
        variants={variants}
      >
        <PlayerCurrentTrackContainer className="w-[85vw]" id="widget__mobile" />
      </motion.div>
    </div>
  );
};

export default PlayerWidgetMobile;
