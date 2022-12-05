import { useReleaseTrackPlayer } from "~/hooks/player/useReleaseTrackPlayer";
import PlayerTrack from "~/components/organisms/PlayerTrack";
import type { PlayerTrackProps } from "~/components/organisms/PlayerTrack";
import type { PlayerReleaseTrackContainerProps } from "./PlayerReleaseTrackContainer.types";

const PlayerReleaseTrackContainer = ({
  track,
  id
}: PlayerReleaseTrackContainerProps) => {
  const { waveform } = track;
  const { seek, load, setSeek, isPlaying } = useReleaseTrackPlayer(track, id);
  const handleSeekChange: PlayerTrackProps["onSeekChange"] = (seek) => {
    setSeek(seek, true);
  };
  if (!waveform) return null;
  return (
    <PlayerTrack
      waveform={waveform}
      load={load}
      seek={seek}
      isPlaying={isPlaying}
      onSeekChange={handleSeekChange}
    />
  );
};

export default PlayerReleaseTrackContainer;
