import ActionPlay from '~/components/molecules/ActionPlay';
import { useReleaseTrackPlayer } from '~/hooks/player/useReleaseTrackPlayer';

import type { ReleaseActionPlayContainerProps } from './ReleaseActionPlayContainer.types';

const ReleaseActionPlayContainer = ({
  track,
  release,
}: ReleaseActionPlayContainerProps) => {
  const { isPlaying, title, togglePlay } = useReleaseTrackPlayer(
    track,
    release,
  );

  return (
    <ActionPlay
      title={`play release ${title}`}
      isPlaying={isPlaying}
      onChange={togglePlay}
    />
  );
};

export default ReleaseActionPlayContainer;
