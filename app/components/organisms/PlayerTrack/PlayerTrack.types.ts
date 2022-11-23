export type PlayerTrackProps = {
  waveform: string;
  seek: number;
  load: number;
  isPlaying?: boolean;
  onSeekChange?: (seek: number) => void;
};
