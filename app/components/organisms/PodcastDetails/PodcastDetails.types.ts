import { Track } from '~/types/gql';

export type PodcastDetailsProps = {
  podcast: Track;
  podcasts?: Track[];
};
