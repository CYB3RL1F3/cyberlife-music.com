import { useCurrentTrackPlayer } from "~/hooks/player/useCurrentTrackPlayer";
import Player from "../Player/Player";

const PlayerCurrentTrackContainer = () => {
  const currentTrackPlayer = useCurrentTrackPlayer();
  return <Player {...currentTrackPlayer} />;
};

export default PlayerCurrentTrackContainer;
