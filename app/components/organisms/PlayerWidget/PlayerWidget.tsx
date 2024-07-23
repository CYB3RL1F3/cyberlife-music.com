import { motion } from "framer-motion";
import { usePlayerTrackVisibility } from "~/hooks/player/usePlayerTrackVisibility";
import PlayerCurrentTrackContainer from "~/components/organisms/PlayerCurrentTrackContainer";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 }
};

const PlayerWidget = () => {
  const { showExternalPlayer } = usePlayerTrackVisibility();

  return (
    <motion.div
      className="flex w-full"
      animate={showExternalPlayer ? "open" : "closed"}
      variants={variants}
    >
      <PlayerCurrentTrackContainer />
    </motion.div>
  );
};

export default PlayerWidget;
