import List from '~/components/organisms/List';
import ReleaseTracklistItem from '~/components/organisms/ReleaseTracklistItem';
import { getCyberlifeReleaseTracks } from '~/utils/business/filters';

import { ReleaseTracklistProps } from './ReleaseTracklist.types';

const ReleaseTracklist = ({ release }: ReleaseTracklistProps) => {
  const tracks = release.tracklist || [];
  const cyberTracks = getCyberlifeReleaseTracks(tracks);
  return (
    <List>
      {cyberTracks?.map(
        (track) =>
          track.id && (
            <ReleaseTracklistItem
              key={track.id}
              track={track}
              release={release}
            />
          ),
      )}
    </List>
  );
};

export default ReleaseTracklist;
