import type { useReleaseTrackPlayer } from "~/hooks/player/useReleaseTrackPlayer";
import { ReleaseFragmentTracklistArtists } from "~/types/gql/ReleaseFragment";

export type PlayerReleaseTrackContainerProps = {
  track: Parameters<typeof useReleaseTrackPlayer>[0];
  id: Parameters<typeof useReleaseTrackPlayer>[1];
  artists: ReleaseFragmentTracklistArtists[] | null;
  album?: string | null;
  prevId?: number | null;
  nextId?: number | null;
};
