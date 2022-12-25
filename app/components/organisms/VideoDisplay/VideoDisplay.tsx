import PageDetailHeader from "~/components/molecules/PageDetailHeader";
import PageDetailHeaderPortal from "~/components/molecules/PageDetailHeaderPortal";
import type { VideoDisplayProps } from "./VideoDisplay.types";
import Text from "~/components/atoms/Text";
import VideoPlayer from "~/components/organisms/VideoPlayer";
import { useFluidTransition } from "~/hooks/useFluidTransition";
import { motion } from "framer-motion";

const VideoDisplay = ({ video }: VideoDisplayProps) => {
  const { title, description, type, url } = video;
  const transition = useFluidTransition();
  return (
    <div className="o-4">
      <PageDetailHeaderPortal>
        <PageDetailHeader title={title} url="/videos" />
      </PageDetailHeaderPortal>
      <motion.div {...transition(0.1)} className="flex justify-end w-full h-96">
        <VideoPlayer url={url} type={type} />
      </motion.div>
      <motion.div {...transition(0.2)} className="w-full">
        <Text.RightItalic>{description}</Text.RightItalic>
      </motion.div>
    </div>
  );
};

export default VideoDisplay;
