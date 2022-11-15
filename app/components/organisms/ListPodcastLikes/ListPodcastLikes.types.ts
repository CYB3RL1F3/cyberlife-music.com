import type { TrackFragment } from "~/types/gql/TrackFragment";

export type ListPodcastLikesProps = {
  likes: NonNullable<TrackFragment["likes"]>;
};
