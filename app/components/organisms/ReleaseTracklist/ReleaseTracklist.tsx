import List from '~/components/organisms/List';
import ReleaseTracklistItem from '~/components/organisms/ReleaseTracklistItem';
import { getCyberlifeReleaseTracks } from '~/utils/business/filters';

import { ReleaseTracklistProps } from './ReleaseTracklist.types';

const ReleaseTracklist = ({
  tracks,
  thumb,
  id,
  album,
}: ReleaseTracklistProps) => {
  const cyberTracks = getCyberlifeReleaseTracks(tracks);
  return (
    <List>
      {cyberTracks?.map(
        (track, index) =>
          id && (
            <ReleaseTracklistItem
              key={track.id}
              track={track}
              thumb={thumb}
              album={album}
              nextId={
                index < cyberTracks.length
                  ? cyberTracks[index + 1]?.stream?.id
                  : 0
              }
              prevId={
                index > 0
                  ? cyberTracks[index - 1]?.stream?.id
                  : cyberTracks[cyberTracks.length - 1].stream?.id
              }
              pageUrl={`/releases/${id}`}
            />
          ),
      )}
    </List>
  );
};

export default ReleaseTracklist;
