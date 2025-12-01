import { useTrackPlayer } from './useTrackPlayer';
import { usePodcastTrackPosition } from './usePodcastTrackPosition';
import { Track } from '~/types/gql';

export const usePodcastTrackPlayer = (track: Track) => {
  const { prevId, nextId } = usePodcastTrackPosition(track.id);

  const podcastTrackPlayer = useTrackPlayer(track, {
    artist: 'Cyberlife',
    album: 'Podcasts',
    nextId,
    prevId,
    pageUrl: `/podcasts/${track.slug}`,
  });
  return podcastTrackPlayer;
};
