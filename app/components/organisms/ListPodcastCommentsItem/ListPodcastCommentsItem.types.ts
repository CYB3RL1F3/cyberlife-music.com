import type { TrackFragment } from "~/types/gql/TrackFragment";

export type ListPodcastCommentsItemProps = {
  comment: NonNullable<TrackFragment["comments"]>[number];
};
