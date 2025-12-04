import { useSecurityContext } from '~/components/contexts/SecurityContext/SecurityContext.hook';
import type { PodcastActionPlayContainerProps } from './PodcastActionPlayContainer.types';
import ActionPlay from '~/components/molecules/ActionPlay';
import { usePodcastTrackPlayer } from '~/hooks/player/usePodcastTrackPlayer';

const PodcastActionPlayContainer = ({
  track,
  podcasts = [],
}: PodcastActionPlayContainerProps) => {
  const { isPlaying, togglePlay, title } = usePodcastTrackPlayer(
    track,
    podcasts,
  );

  const { isBot } = useSecurityContext();

  return (
    <ActionPlay
      title={`play podcast ${title}`}
      isPlaying={isPlaying}
      onChange={togglePlay}
      disabled={isBot}
    />
  );
};

export default PodcastActionPlayContainer;
