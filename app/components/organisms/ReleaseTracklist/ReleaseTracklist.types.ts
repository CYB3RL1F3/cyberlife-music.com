import type { ReleaseQueryRelease } from "~/types/gql/ReleaseQuery";

export type ReleaseTracklistProps = {
  tracks: NonNullable<ReleaseQueryRelease["tracklist"]>;
  thumb: ReleaseQueryRelease["thumb"];
  id: ReleaseQueryRelease["_id"];
};
