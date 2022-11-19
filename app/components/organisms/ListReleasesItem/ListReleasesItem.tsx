import type { ListReleasesItemProps } from "./ListReleasesItem.types";
import ListItem from "~/components/molecules/ListItem";
import ListItemSnippet from "~/components/molecules/ListItemSnippet";
import Anchor from "~/components/atoms/Anchor";
import BackgroundImage from "~/components/atoms/BackgroundImage";
import dayjs from "dayjs";

const ListReleasesItem = ({ release }: ListReleasesItemProps) => {
  const { title, _id, releaseDate, role, thumb, label, discogs } = release;
  const artwork = thumb || "";
  if (!title) return null;
  return (
    <ListItem
      thumbnail={
        <BackgroundImage
          className="items-center justify-center w-24 h-24 md:w-32 md:h-32 "
          src={artwork}
        />
      }
    >
      <ListItemSnippet title={title} href={`${_id}`}>
        <div className="w-full h-14">
          <p className="text-sm italic text-right">{label}</p>
          <p className="text-sm italic text-right">
            {role} - {`Released on ${dayjs(releaseDate).format("DD/MM/YYYY")}`}
          </p>
        </div>
        <div className="w-full">
          <p className="hidden text-sm italic text-right md:block">
            {discogs && (
              <Anchor className="text-sm" href={discogs}>
                Buy on Discogs
              </Anchor>
            )}
          </p>
        </div>
      </ListItemSnippet>
    </ListItem>
  );
};

export default ListReleasesItem;
