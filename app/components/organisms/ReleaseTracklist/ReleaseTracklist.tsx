import List from "~/components/organisms/List";
import { getCyberlifeReleaseTracks } from "~/utils/business/filters";
import ReleaseTracklistItem from "~/components/organisms/ReleaseTracklistItem";
import type { ReleaseTracklistProps } from "./ReleaseTracklist.types";

const ReleaseTracklist = ({
  tracks,
  thumb,
  id,
  album
}: ReleaseTracklistProps) => {
  const cyberTracks = getCyberlifeReleaseTracks(tracks);
  return (
    <List>
      {cyberTracks.map(
        (track, index) =>
          id && (
            <ReleaseTracklistItem
              key={track.id}
              id={id}
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
            />
          )
      )}
    </List>
  );
};

export default ReleaseTracklist;
