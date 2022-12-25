import type { ListVideosItemProps } from "./ListVideosItem.types";
import Ellipsis from "~/components/molecules/Ellipsis";
import ListItem from "~/components/molecules/ListItem";
import ListItemSnippet from "~/components/molecules/ListItemSnippet";
import Thumbnail from "~/components/molecules/Thumbnail";
import LinkPlay from "~/components/molecules/LinkPlay";

const ListVideosItem = ({ video }: ListVideosItemProps) => {
  const { illustration, title, description, _id } = video;
  if (!title) return null;
  return (
    <ListItem
      thumbnail={
        <Thumbnail variant="large" src={illustration || ""}>
          <LinkPlay to={`${_id}`} />
        </Thumbnail>
      }
    >
      <ListItemSnippet title={title} href={`${_id}`}>
        <div className="w-full h-16">
          <Ellipsis className="pr-2 text-xs italic text-right md:text-sm">
            {description}
          </Ellipsis>
        </div>
      </ListItemSnippet>
    </ListItem>
  );
};

export default ListVideosItem;
