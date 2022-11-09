import type { ReleaseActionPlayContainerProps } from "./ReleaseActionPlayContainer.types";
import ActionPlay from "~/components/molecules/ActionPlay";
import { useReleaseTrackPlayer } from "~/hooks/player/useReleaseTrackPlayer";

const ReleaseActionPlayContainer = ({
  track
}: ReleaseActionPlayContainerProps) => {
  const { isPlaying, togglePlay } = useReleaseTrackPlayer(track);
  return <ActionPlay isPlaying={isPlaying} onChange={togglePlay} />;
};

export default ReleaseActionPlayContainer;
