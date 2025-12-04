import { Track } from '~/types/gql';

export type ViewPodcastProps = {
  podcast: Track;
  podcasts?: Track[];
};
