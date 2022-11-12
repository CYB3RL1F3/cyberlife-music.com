import type { ReleaseQueryReleaseTracklist } from "~/types/gql/ReleaseQuery";
import type { ReleaseQueryRelease } from "~/types/gql/ReleaseQuery";

export type ReleaseTracklistItemProps = {
  track: ReleaseQueryReleaseTracklist;
  thumb: ReleaseQueryRelease["thumb"];
};
