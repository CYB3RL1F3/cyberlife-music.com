import ListItem from "~/components/molecules/ListItem";
import ListItemSnippet from "~/components/molecules/ListItemSnippet";
import Thumbnail from "~/components/molecules/Thumbnail";
import type { ReleaseTracklistItemProps } from "./ReleaseTracklistItem.types";
import ReleaseActionPlayContainer from "../ReleaseActionPlayContainer/ReleaseActionPlayContainer";
import PlayerReleaseTrackContainer from "../PlayerReleaseTrackContainer";

const ReleaseTracklistItem = ({
  track,
  thumb,
  id
}: ReleaseTracklistItemProps) => {
  const { title, stream } = track;
  if (!stream) return null;
  const { artwork } = stream;
  return (
    <ListItem
      thumbnail={
        <Thumbnail src={artwork || thumb || ""}>
          <ReleaseActionPlayContainer track={stream} id={id} />
        </Thumbnail>
      }
    >
      <ListItemSnippet title={title || ""}>
        <div className="w-full h-16" />
        <div className="max-md:hidden">
          <PlayerReleaseTrackContainer track={stream} id={id} />
        </div>
      </ListItemSnippet>
    </ListItem>
  );
};

export default ReleaseTracklistItem;
