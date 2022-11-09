import type { PodcastActionPlayContainerProps } from "./PodcastActionPlayContainer.types";
import ActionPlay from "~/components/molecules/ActionPlay";
import { usePodcastTrackPlayer } from "~/hooks/player/usePodcastTrackPlayer";

const PodcastActionPlayContainer = ({
  track
}: PodcastActionPlayContainerProps) => {
  const { isPlaying, togglePlay } = usePodcastTrackPlayer(track);
  return <ActionPlay isPlaying={isPlaying} onChange={togglePlay} />;
};

export default PodcastActionPlayContainer;
