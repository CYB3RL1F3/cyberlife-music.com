import { Track } from '~/types/gql';

export type ListPodcastLikesProps = {
  likes: NonNullable<Track['likes']>;
};
