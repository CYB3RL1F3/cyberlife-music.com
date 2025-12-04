import { useMemo } from 'react';
import { Link } from '@remix-run/react';

import { useCurrentTrackPlayer } from '~/hooks/player/useCurrentTrackPlayer';
import Player from '~/components/organisms/Player';
import Text from '~/components/atoms/Text';
import { formatDuration, seekPercentToSeconds } from '~/utils/date';

import { PlayerCurrentTrackContainerProps } from './PlayerCurrentTrackContainer.types';
import { useSecurityContext } from '~/components/contexts/SecurityContext/SecurityContext.hook';

const PlayerCurrentTrackContainer = ({
  id,
  className,
}: PlayerCurrentTrackContainerProps) => {
  const currentTrackPlayer = useCurrentTrackPlayer();
  const { title, seek, duration, pageUrl } = currentTrackPlayer;

  const formattedSeek = useMemo(
    () =>
      `${formatDuration(seekPercentToSeconds(seek, duration) || 0)} / ${formatDuration(duration)}`,
    [seek, duration],
  );

  const { isBot } = useSecurityContext();

  return (
    <div className="flex-col w-[95vw] lg:w-full h-fit">
      <div className="inline-flex w-full gap-4 mb-0 font-semibold text-white pl-14 space-between">
        <Link
          className="flex flex-1 hover:underline decoration-gray-400"
          to={pageUrl}
        >
          <Text className="flex flex-1 text-sm text-gray-400 lg:text-md line-clamp-1">
            {title}
          </Text>{' '}
        </Link>
        <Text className="flex pr-0 text-sm text-gray-500 lg:text-md">
          {formattedSeek}
        </Text>
      </div>
      <Player
        {...currentTrackPlayer}
        disabled={isBot}
        id={id}
        className={className}
      />
    </div>
  );
};

export default PlayerCurrentTrackContainer;
