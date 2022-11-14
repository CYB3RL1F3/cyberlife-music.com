import { useReleaseTrackPlayer } from "~/hooks/player/useReleaseTrackPlayer";
import PlayerTrack from "~/components/organisms/PlayerTrack";
import type { PlayerTrackProps } from "~/components/organisms/PlayerTrack";
import type { PlayerReleaseTrackContainerProps } from "./PlayerReleaseTrackContainer.types";

const PlayerReleaseTrackContainer = ({
  track,
  id
}: PlayerReleaseTrackContainerProps) => {
  console.log(track);
  const { waveform } = track;
  const { seek, load, setSeek } = useReleaseTrackPlayer(track, id);
  const handleSeekChange: PlayerTrackProps["onSeekChange"] = (seek) => {
    setSeek(seek, true);
  };
  if (!waveform) return null;
  return (
    <PlayerTrack
      waveform={waveform}
      load={load}
      seek={seek}
      onSeekChange={handleSeekChange}
    />
  );
};

export default PlayerReleaseTrackContainer;
