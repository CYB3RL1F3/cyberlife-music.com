export type PlayerTrackProps = {
  waveform: string;
  seek: number;
  load: number;
  isPlaying?: boolean;
  id?: number | string;
  onSeekChange?: (seek: number) => void;
};
