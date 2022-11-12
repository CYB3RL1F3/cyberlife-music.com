import List from "~/components/molecules/List";
import ReleaseTracklistItem from "../ReleaseTracklistItem";
import type { ReleaseTracklistProps } from "./ReleaseTracklist.types";

const ReleaseTracklist = ({ tracks, thumb }: ReleaseTracklistProps) => {
  return (
    <List>
      {tracks.map((track) => (
        <ReleaseTracklistItem key={track.id} track={track} thumb={thumb} />
      ))}
    </List>
  );
};

export default ReleaseTracklist;
