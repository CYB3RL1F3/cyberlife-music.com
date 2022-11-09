import type { useCurrentTrackPlayer } from "~/hooks/player/useCurrentTrackPlayer";

export type AudioProps = ReturnType<typeof useCurrentTrackPlayer>;

export type AudioElement = {
  current: HTMLAudioElement;
};
