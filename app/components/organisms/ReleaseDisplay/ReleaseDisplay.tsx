import PageDetailHeader from "~/components/molecules/PageDetailHeader";
import PageDetailHeaderPortal from "~/components/molecules/PageDetailHeaderPortal";
import ReleaseDetails from "../ReleaseDetails/ReleaseDetails";
import ReleaseTracklist from "../ReleaseTracklist";
import type { ReleaseDisplayProps } from "./ReleaseDisplay.types";
import Text from "~/components/atoms/Text";
import { useFluidTransition } from "~/hooks/useFluidTransition";
import { motion } from "framer-motion";

const ReleaseDisplay = ({ release }: ReleaseDisplayProps) => {
  const transition = useFluidTransition({
    initial: {
      x: 50,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1
    }
  });
  return (
    <div className="o-4">
      <PageDetailHeaderPortal>
        <PageDetailHeader title={release.title} url="/releases" />
      </PageDetailHeaderPortal>
      <motion.div className="w-full" {...transition(0.05)}>
        <ReleaseDetails release={release} />
      </motion.div>
      <motion.div className="py-4" {...transition(0.1)}>
        <Text.RightItalic>{release.notes}</Text.RightItalic>
      </motion.div>
      {release.tracklist && (
        <ReleaseTracklist
          id={release._id}
          tracks={release.tracklist}
          thumb={release.thumb}
        />
      )}
    </div>
  );
};

export default ReleaseDisplay;
