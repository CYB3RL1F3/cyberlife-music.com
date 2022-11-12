import ListItem from "~/components/molecules/ListItem";
import ListItemSnippet from "~/components/molecules/ListItemSnippet";
import Thumbnail from "~/components/molecules/Thumbnail";
import type { ReleaseTracklistItemProps } from "./ReleaseTracklistItem.types";
import ReleaseActionPlayContainer from "../ReleaseActionPlayContainer/ReleaseActionPlayContainer";
import PlayerReleaseTrackContainer from "../PlayerReleaseTrackContainer";

const ReleaseTracklistItem = ({ track, thumb }: ReleaseTracklistItemProps) => {
  const { title, stream } = track;
  if (!stream) return null;
  const { artwork } = stream;
  return (
    <ListItem
      thumbnail={
        <Thumbnail src={artwork || thumb || ""}>
          <ReleaseActionPlayContainer track={stream} />
        </Thumbnail>
      }
    >
      <ListItemSnippet title={title || ""}>
        <div className="w-full h-16" />
        <PlayerReleaseTrackContainer track={stream} />
      </ListItemSnippet>
    </ListItem>
  );
};

export default ReleaseTracklistItem;
