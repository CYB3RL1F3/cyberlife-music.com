import type { ReleaseActionPlayContainerProps } from "./ReleaseActionPlayContainer.types";
import ActionPlay from "~/components/molecules/ActionPlay";
import { useReleaseTrackPlayer } from "~/hooks/player/useReleaseTrackPlayer";

const ReleaseActionPlayContainer = ({
  track,
  id
}: ReleaseActionPlayContainerProps) => {
  const { isPlaying, togglePlay } = useReleaseTrackPlayer(track, id);
  return <ActionPlay isPlaying={isPlaying} onChange={togglePlay} />;
};

export default ReleaseActionPlayContainer;
