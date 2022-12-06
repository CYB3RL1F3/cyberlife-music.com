import type { PodcastActionPlayContainerProps } from "./PodcastActionPlayContainer.types";
import ActionPlay from "~/components/molecules/ActionPlay";
import { usePodcastTrackPlayer } from "~/hooks/player/usePodcastTrackPlayer";

const PodcastActionPlayContainer = ({
  track
}: PodcastActionPlayContainerProps) => {
  const { isPlaying, togglePlay, title } = usePodcastTrackPlayer(track);
  return (
    <ActionPlay
      title={`play podcast ${title}`}
      isPlaying={isPlaying}
      onChange={togglePlay}
    />
  );
};

export default PodcastActionPlayContainer;
