import type { MouseEventHandler, MutableRefObject } from "react";
import { useCallback, useRef } from "react";
import Waveform from "~/components/atoms/Waveform";
import type { PlayerTrackProps } from "./PlayerTrack.types";
import { clsx } from "clsx";

const PlayerTrack = ({
  waveform,
  seek,
  load,
  isPlaying,
  onSeekChange,
  id
}: PlayerTrackProps) => {
  const waveformRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const playerRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  const moveSeek = useCallback<MouseEventHandler<HTMLDivElement>>(
    (e) => {
      if (!waveformRef) return;
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
    [onSeekChange]
  );

  return (
    <div
      id={id ? `player__${id}` : undefined}
      ref={playerRef}
      onClick={moveSeek}
      className={clsx("relative w-full h-6 cursor-pointer opacity-80", {
        grayscale: !isPlaying
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
          width: `${load}%`
        }}
      />
      <div
        className="absolute z-30 h-6 transition-all bg-black cursor-pointer opacity-30"
        style={{
          width: `${seek}%`
        }}
      />
    </div>
  );
};

export default PlayerTrack;
