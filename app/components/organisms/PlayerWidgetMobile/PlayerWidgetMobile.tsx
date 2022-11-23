import { motion } from "framer-motion";
import { usePlayerTrackContext } from "~/hooks/player/usePlayerTrackContext";
import PlayerCurrentTrackContainer from "~/components/organisms/PlayerCurrentTrackContainer";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0.5, y: 50 }
};

const PlayerWidgetMobile = () => {
  const { showExternalPlayer } = usePlayerTrackContext(true);
  return (
    <motion.div
      className="absolute bottom-0 z-10 flex w-screen h-12"
      animate={showExternalPlayer ? "open" : "closed"}
      variants={variants}
    >
      <PlayerCurrentTrackContainer />
    </motion.div>
  );
};

export default PlayerWidgetMobile;
