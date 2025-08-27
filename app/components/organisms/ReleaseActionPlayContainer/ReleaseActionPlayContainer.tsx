import type { ReleaseActionPlayContainerProps } from './ReleaseActionPlayContainer.types';
import ActionPlay from '~/components/molecules/ActionPlay';
import { useReleaseTrackPlayer } from '~/hooks/player/useReleaseTrackPlayer';

const ReleaseActionPlayContainer = ({
  track,
  album,
  artist,
  nextId,
  prevId,
}: ReleaseActionPlayContainerProps) => {
  const { isPlaying, title, togglePlay } = useReleaseTrackPlayer(track, {
    album,
    artist,
    nextId,
    prevId,
  });
  return (
    <ActionPlay
      title={`play release ${title}`}
      isPlaying={isPlaying}
      onChange={togglePlay}
    />
  );
};

export default ReleaseActionPlayContainer;
