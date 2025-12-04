import { clsx } from 'clsx';
import { useCallback, useRef } from 'react';
import type { MouseEventHandler } from 'react';

import Waveform from '~/components/atoms/Waveform';

import type { PlayerTrackProps } from './PlayerTrack.types';

const PlayerTrack = ({
  waveform,
  seek,
  load,
  isPlaying,
  onSeekChange,
  id,
  disabled,
}: PlayerTrackProps) => {
  const waveformRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  const moveSeek = useCallback<MouseEventHandler<HTMLDivElement>>(
    (e) => {
      if (!waveformRef?.current || !playerRef?.current || disabled) return;
      e.preventDefault();
      e.stopPropagation();
      const offsetLeft = playerRef.current.getClientRects().item(0)?.left;
      const position =
        e.clientX -
        waveformRef.current.offsetLeft -
        (offsetLeft || playerRef.current.offsetLeft);
      const percent = (position / waveformRef.current.offsetWidth) * 100;
      onSeekChange?.(percent);
    },
    [onSeekChange, disabled],
  );

  return (
    <div
      id={`player__${id}`}
      ref={playerRef}
      onClick={moveSeek}
      className={clsx('relative w-full h-6 cursor-pointer opacity-80', {
        grayscale: !isPlaying,
      })}
    >
      <Waveform
        ref={waveformRef}
        src={waveform}
        className="absolute z-10 cursor-pointer"
      />
      <div
        className="absolute z-20 h-6 transition-all bg-black cursor-pointer opacity-10"
        style={{
          width: `${load}%`,
        }}
      />
      <div
        className="absolute z-30 h-6 transition-all bg-black cursor-pointer opacity-30"
        style={{
          width: `${seek}%`,
        }}
      />
    </div>
  );
};

export default PlayerTrack;
