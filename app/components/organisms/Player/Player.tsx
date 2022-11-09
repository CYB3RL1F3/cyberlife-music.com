import ActionPlay from "~/components/molecules/ActionPlay";
import type { PlayerTrackProps } from "../PlayerTrack";
import PlayerTrack from "../PlayerTrack";
import type { PlayerProps } from "./Player.types";

const Player = ({
  isPlaying,
  setSeek,
  togglePlay,
  seek,
  load,
  waveform
}: PlayerProps) => {
  const handleSeekChange: PlayerTrackProps["onSeekChange"] = (seek) => {
    setSeek(seek, true);
  };

  if (!waveform) return null;

  return (
    <article className="flex w-full h-12">
      <div className="w-12 h-12">
        <ActionPlay isPlaying={isPlaying} onChange={togglePlay} />
      </div>
      <div className="flex items-center w-full ml-2">
        <PlayerTrack
          waveform={waveform}
          seek={seek}
          load={load}
          onSeekChange={handleSeekChange}
        />
      </div>
    </article>
  );
};

export default Player;
