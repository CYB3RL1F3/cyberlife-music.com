export type PlayerTrackProps = {
  waveform: string;
  seek: number;
  load: number;
  onSeekChange?: (seek: number) => void;
};
