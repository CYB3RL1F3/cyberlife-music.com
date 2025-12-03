import ActionPlay from '~/components/molecules/ActionPlay';
import { useReleaseTrackPlayer } from '~/hooks/player/useReleaseTrackPlayer';

import type { ReleaseActionPlayContainerProps } from './ReleaseActionPlayContainer.types';
import { useSecurityContext } from '~/components/contexts/SecurityContext/SecurityContext.hook';

const ReleaseActionPlayContainer = ({
  track,
  release,
}: ReleaseActionPlayContainerProps) => {
  const { isPlaying, title, togglePlay } = useReleaseTrackPlayer(
    track,
    release,
  );

  const { isBot } = useSecurityContext();

  return (
    <ActionPlay
      title={`play release ${title}`}
      isPlaying={isPlaying}
      onChange={togglePlay}
      disabled={isBot}
    />
  );
};

export default ReleaseActionPlayContainer;
