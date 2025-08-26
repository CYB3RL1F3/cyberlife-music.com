import { useCurrentTrackPlayer } from '~/hooks/player/useCurrentTrackPlayer';
import Player from '../Player/Player';
import { useLocation } from '@remix-run/react';

const PlayerCurrentTrackContainer = () => {
  const currentTrackPlayer = useCurrentTrackPlayer();
  const { pathname } = useLocation();
  return <Player {...currentTrackPlayer} uniqId={pathname.replace('/', '_')} />;
};

export default PlayerCurrentTrackContainer;
