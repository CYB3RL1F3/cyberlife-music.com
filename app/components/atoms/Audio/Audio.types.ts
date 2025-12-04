import type { useCurrentTrackPlayer } from '~/hooks/player/useCurrentTrackPlayer';

export type AudioProps = ReturnType<typeof useCurrentTrackPlayer> & {
  disabled?: boolean;
};

export type AudioElement = {
  current: HTMLAudioElement;
};
