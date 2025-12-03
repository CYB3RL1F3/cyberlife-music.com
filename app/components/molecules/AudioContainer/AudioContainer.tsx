import Audio from '~/components/atoms/Audio';
import { useSecurityContext } from '~/components/contexts/SecurityContext/SecurityContext.hook';
import { useCurrentTrackPlayer } from '~/hooks/player/useCurrentTrackPlayer';
import { useMediaSession } from '~/hooks/player/useMediaSession';

const AudioContainer = () => {
  useMediaSession();
  const currentTrack = useCurrentTrackPlayer();
  const { isBot } = useSecurityContext();

  if (!currentTrack.isPlaying || !currentTrack.url || isBot) return null;

  return <Audio {...currentTrack} />;
};

export default AudioContainer;
