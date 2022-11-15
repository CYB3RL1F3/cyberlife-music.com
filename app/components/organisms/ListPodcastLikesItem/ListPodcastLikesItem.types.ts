import type { TrackFragment } from "~/types/gql/TrackFragment";

export type ListPodcastLikesItemProps = {
  like: NonNullable<TrackFragment["likes"]>[number];
};
