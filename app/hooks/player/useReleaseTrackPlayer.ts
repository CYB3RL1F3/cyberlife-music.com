import { useBufferTrackPlayer } from "./useBufferTrackPlayer";
import type { ReleaseFragmentTracklistStream } from "~/types/gql/ReleaseFragment";
import { getTrackTobuffer } from "~/utils/trackToBuffer";

export const useReleaseTrackPlayer = (
  track: ReleaseFragmentTracklistStream,
  releaseId: string
) => {
  const contexts = {
    desktop: [`/releases/${releaseId}`] as const,
    mobile: [] as const
  };
  const toBuffer = getTrackTobuffer(track, contexts);
  const playerContext = useBufferTrackPlayer(toBuffer);
  return playerContext;
};
