import { Playlist, Track } from '~/types/gql';

export type ListPodcastsProps = {
  podcasts?: Track[] | null;
  artwork?: Playlist['artwork'];
};
