import type { ReleaseQueryReleaseTracklist } from "~/types/gql/ReleaseQuery";
import type { ReleaseQueryRelease } from "~/types/gql/ReleaseQuery";
import { PlayerReleaseTrackContainerProps } from "../PlayerReleaseTrackContainer/PlayerReleaseTrackContainer.types";

export type ReleaseTracklistItemProps = {
  track: ReleaseQueryReleaseTracklist;
  thumb: ReleaseQueryRelease["thumb"];
  id: string;
  album?: ReleaseQueryRelease["title"];
} & Pick<PlayerReleaseTrackContainerProps, "nextId" | "prevId">;
