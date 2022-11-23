import { usePodcastTrackPlayer } from "~/hooks/player/usePodcastTrackPlayer";
import PlayerTrack from "~/components/organisms/PlayerTrack";
import type { PlayerTrackProps } from "~/components/organisms/PlayerTrack";
import type { PlayerPodcastTrackContainerProps } from "./PlayerPodcastTrackContainer.types";

const PlayerPodcastTrackContainer = ({
  track
}: PlayerPodcastTrackContainerProps) => {
  const { waveform } = track;
  const { seek, load, setSeek, isPlaying } = usePodcastTrackPlayer(track);
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

export default PlayerPodcastTrackContainer;
