import type { ReleaseItemFragment } from "~/types/gql/ReleaseItemFragment";

type Release = NonNullable<ReleaseItemFragment["release"]>;

export type ReleaseTracklistProps = {
  tracks: NonNullable<Release["tracklist"]>;
  thumb: Release["thumb"];
  id: Release["_id"];
  album: Release["title"];
};
