import type { useCurrentTrackPlayer } from '~/hooks/player/useCurrentTrackPlayer';

export type PlayerProps = Omit<
  ReturnType<typeof useCurrentTrackPlayer>,
  'id'
> & {
  id: string | number;
  className?: string;
  disabled?: boolean;
};
