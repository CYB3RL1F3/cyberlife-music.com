import { useTrackPlayer } from "./useTrackPlayer";
import type { ReleaseFragmentTracklistStream } from "~/types/gql/ReleaseFragment";

export const useReleaseTrackPlayer = (
  track: ReleaseFragmentTracklistStream,
  releaseId: string,
  extra?: Parameters<typeof useTrackPlayer>[2]
) => {
  const contexts = {
    desktop: [`/releases/${releaseId}`] as const,
    mobile: [] as const
  };
  const playerContext = useTrackPlayer(track, contexts, extra);
  return playerContext;
};
