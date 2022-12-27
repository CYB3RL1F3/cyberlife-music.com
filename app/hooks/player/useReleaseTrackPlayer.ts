import { useTrackPlayer } from "./useTrackPlayer";
import type { ReleaseFragmentTracklistStream } from "~/types/gql/ReleaseFragment";

export const useReleaseTrackPlayer = (
  track: ReleaseFragmentTracklistStream,
  releaseId: string
) => {
  const contexts = {
    desktop: [`/releases/${releaseId}`] as const,
    mobile: [] as const
  };
  const playerContext = useTrackPlayer(track, contexts);
  return playerContext;
};
