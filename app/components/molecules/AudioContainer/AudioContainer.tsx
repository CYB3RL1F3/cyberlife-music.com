import Audio from "~/components/atoms/Audio";
import { useCurrentTrackPlayer } from "~/hooks/player/useCurrentTrackPlayer";

const AudioContainer = () => {
  const currentTrack = useCurrentTrackPlayer();
  console.log("CURTRAXXX >>> ", currentTrack);
  if (!currentTrack.isPlaying || !currentTrack.url) return null;
  return <Audio {...currentTrack} />;
};

export default AudioContainer;
