import type { ListReleasesItemProps } from "./ListReleasesItem.types";
import ListItem from "~/components/molecules/ListItem";
import ListItemSnippet from "~/components/molecules/ListItemSnippet";
import Anchor from "~/components/atoms/Anchor";
import dayjs from "dayjs";
import Picture from "../Picture";

const ListReleasesItem = ({ release }: ListReleasesItemProps) => {
  const { title, slug, releaseDate, role, thumb, label, discogs } = release;
  const artwork = thumb || "";
  if (!title) return null;
  return (
    <ListItem thumbnail={<Picture alt={title} src={artwork} />}>
      <ListItemSnippet title={title} href={`${slug}`}>
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
