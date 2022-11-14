import List from "~/components/molecules/List";
import { getCyberlifeReleaseTracks } from "~/utils/business/filters";
import ReleaseTracklistItem from "~/components/organisms/ReleaseTracklistItem";
import type { ReleaseTracklistProps } from "./ReleaseTracklist.types";

const ReleaseTracklist = ({ tracks, thumb, id }: ReleaseTracklistProps) => {
  const cybertracks = getCyberlifeReleaseTracks(tracks);
  return (
    <List>
      {cybertracks.map(
        (track) =>
          id && (
            <ReleaseTracklistItem
              key={track.id}
              id={id}
              track={track}
              thumb={thumb}
            />
          )
      )}
    </List>
  );
};

export default ReleaseTracklist;
