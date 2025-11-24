import Audio from '~/components/atoms/Audio';
import { useCurrentTrackPlayer } from '~/hooks/player/useCurrentTrackPlayer';
import { useMediaSession } from '~/hooks/player/useMediaSession';

const AudioContainer = () => {
  useMediaSession();
  const currentTrack = useCurrentTrackPlayer();

  if (!currentTrack.isPlaying || !currentTrack.url) return null;
  return <Audio {...currentTrack} />;
};

export default AudioContainer;
