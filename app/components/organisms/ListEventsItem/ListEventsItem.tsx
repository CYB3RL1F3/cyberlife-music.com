import dayjs from "dayjs";
import ListItem from "~/components/molecules/ListItem";
import ListItemSnippet from "~/components/molecules/ListItemSnippet";
import Thumbnail from "~/components/molecules/Thumbnail";
import type { ListEventsItemProps } from "./ListEventsItem.types";

const ListEventsItem = ({ event }: ListEventsItemProps) => {
  const { _id, flyer, title, date, address, country } = event;
  if (!title) return null;
  return (
    <ListItem
      thumbnail={<Thumbnail variant="large" src={flyer?.front || ""} />}
    >
      <ListItemSnippet title={title} href={`${_id}`}>
        <div className="w-full h-14">
          <p className="text-sm italic text-right">
            {date && dayjs(date).format("DD MMMM YYYY")}
          </p>
          <p className="text-sm italic text-right">
            {address} {country && `- ${country}`}
          </p>
        </div>
      </ListItemSnippet>
    </ListItem>
  );
};

export default ListEventsItem;
