import { useCurrentTrackPlayer } from '~/hooks/player/useCurrentTrackPlayer';
import Player from '~/components/organisms/Player';
import { PlayerCurrentTrackContainerProps } from './PlayerCurrentTrackContainer.types';

const PlayerCurrentTrackContainer = ({
  id,
}: PlayerCurrentTrackContainerProps) => {
  const currentTrackPlayer = useCurrentTrackPlayer();
  return <Player {...currentTrackPlayer} id={id} />;
};

export default PlayerCurrentTrackContainer;
