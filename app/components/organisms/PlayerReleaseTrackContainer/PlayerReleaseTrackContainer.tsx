import { useReleaseTrackPlayer } from "~/hooks/player/useReleaseTrackPlayer";
import PlayerTrack from "~/components/organisms/PlayerTrack";
import type { PlayerTrackProps } from "~/components/organisms/PlayerTrack";
import type { PlayerReleaseTrackContainerProps } from "./PlayerReleaseTrackContainer.types";

const PlayerReleaseTrackContainer = ({
  track,
  id,
  artists,
  album,
  prevId,
  nextId
}: PlayerReleaseTrackContainerProps) => {
  const { waveform, id: trackId } = track;
  const { seek, load, setSeek, isPlaying } = useReleaseTrackPlayer(track, id, {
    artist: artists?.map(({ name }) => name).join(", "),
    album,
    prevId,
    nextId
  });
  const handleSeekChange: PlayerTrackProps["onSeekChange"] = (seek) => {
    setSeek(seek, true);
  };
  if (!waveform || !trackId) return null;
  return (
    <PlayerTrack
      waveform={waveform}
      load={load}
      id={trackId}
      seek={seek}
      isPlaying={isPlaying}
      onSeekChange={handleSeekChange}
    />
  );
};

export default PlayerReleaseTrackContainer;
