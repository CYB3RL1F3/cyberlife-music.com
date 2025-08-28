import ActionPlay from '~/components/molecules/ActionPlay';
import type { PlayerTrackProps } from '../PlayerTrack';
import PlayerTrack from '../PlayerTrack';
import type { PlayerProps } from './Player.types';

const Player = ({
  isPlaying,
  setSeek,
  togglePlay,
  seek,
  title,
  load,
  waveform,
  id,
}: PlayerProps) => {
  const handleSeekChange: PlayerTrackProps['onSeekChange'] = (seek) => {
    setSeek(seek, true);
  };

  if (!waveform) return null;

  return (
    <article className="flex w-full h-12">
      <div className="w-12 h-12">
        <ActionPlay title={title} isPlaying={isPlaying} onChange={togglePlay} />
      </div>
      <div className="flex items-center w-full h-12 ml-2">
        <PlayerTrack
          waveform={waveform}
          seek={seek}
          load={load}
          isPlaying={isPlaying}
          onSeekChange={handleSeekChange}
          id={id}
        />
      </div>
    </article>
  );
};

export default Player;
