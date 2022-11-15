import type { TrackFragment } from "~/types/gql/TrackFragment";

export type ListPodcastCommentsProps = {
  comments: NonNullable<TrackFragment["comments"]>;
};
