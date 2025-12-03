import { Track } from '~/types/gql';

export type ListPodcastsItemProps = {
  podcast: Track;
  artworkFallback?: Track['artwork'];
  podcasts: Track[];
};
