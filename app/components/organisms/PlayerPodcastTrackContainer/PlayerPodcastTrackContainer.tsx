import { usePodcastTrackPlayer } from '~/hooks/player/usePodcastTrackPlayer';
import PlayerTrack from '~/components/organisms/PlayerTrack';
import type { PlayerTrackProps } from '~/components/organisms/PlayerTrack';
import type { PlayerPodcastTrackContainerProps } from './PlayerPodcastTrackContainer.types';

const PlayerPodcastTrackContainer = ({
  track,
  uniqId,
}: PlayerPodcastTrackContainerProps) => {
  const { waveform, id } = track;

  const { seek, load, setSeek, isPlaying } = usePodcastTrackPlayer(track);

  const handleSeekChange: PlayerTrackProps['onSeekChange'] = (seek) => {
    setSeek(seek, true);
  };

  if (!waveform || !id) return null;

  return (
    <PlayerTrack
      id={id}
      waveform={waveform}
      load={load}
      seek={seek}
      isPlaying={isPlaying}
      onSeekChange={handleSeekChange}
      uniqId={uniqId}
    />
  );
};

export default PlayerPodcastTrackContainer;
