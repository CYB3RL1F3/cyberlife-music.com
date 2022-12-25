import PageDetailHeader from "~/components/molecules/PageDetailHeader";
import PageDetailHeaderPortal from "~/components/molecules/PageDetailHeaderPortal";
import type { PodcastDisplayProps } from "./PodcastDisplay.types";
import PodcastDetails from "../PodcastDetails/PodcastDetails";
import Text from "~/components/atoms/Text";
import { parseHtml, toHtml } from "~/utils/html";
import DisplayPodcastTracklist from "~/components/organisms/DisplayPodcastTracklist";
import DisplayPodcastLikes from "../DisplayPodcastLikes";
import type { ListTagProps } from "~/components/molecules/ListTag";
import ListTag from "~/components/molecules/ListTag";
import DisplayPodcastComments from "~/components/organisms/DisplayPodcastComments";
import PlayerPodcastTrackContainer from "~/components/organisms/PlayerPodcastTrackContainer";
import { useMemo } from "react";
import { useFluidTransition } from "~/hooks/useFluidTransition";
import { motion } from "framer-motion";

const PodcastDisplay = ({ podcast }: PodcastDisplayProps) => {
  const { title, description, tracklist, likes, comments, taglist } = podcast;
  const tags: ListTagProps["tags"] = useMemo(
    () =>
      (taglist || []).map((tag) => ({
        value: tag,
        href: `https://soundcloud.com/tags/${tag}`
      })),
    [taglist]
  );
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
        <PageDetailHeader title={title} url="/" />
      </PageDetailHeaderPortal>
      <motion.div {...transition(0.1)}>
        <PodcastDetails podcast={podcast} />
      </motion.div>
      <motion.div {...transition(0.2)}>
        <PlayerPodcastTrackContainer track={podcast} />
      </motion.div>
      <motion.div {...transition(0.3)} className="pt-4 o-8">
        {description && (
          <Text>{parseHtml(toHtml(description, "underline"))}</Text>
        )}
        {!!tracklist && <DisplayPodcastTracklist tracklist={tracklist} />}
        {!!tags.length && <ListTag tags={tags} />}
        {!!likes?.length && <DisplayPodcastLikes likes={likes} />}
        {!!comments?.length && <DisplayPodcastComments comments={comments} />}
      </motion.div>
    </div>
  );
};

export default PodcastDisplay;
