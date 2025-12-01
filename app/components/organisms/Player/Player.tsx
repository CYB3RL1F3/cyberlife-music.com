import { twMerge } from 'tailwind-merge';

import ActionPlay from '~/components/molecules/ActionPlay';
import type { PlayerTrackProps } from '~/components/organisms/PlayerTrack';
import PlayerTrack from '~/components/organisms/PlayerTrack';

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
  className,
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
      <div className={twMerge('flex items-center w-full h-12 ml-2', className)}>
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
