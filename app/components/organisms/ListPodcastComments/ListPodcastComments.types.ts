import { Track } from '~/types/gql';

export type ListPodcastCommentsProps = {
  comments: NonNullable<Track['comments']>;
};
