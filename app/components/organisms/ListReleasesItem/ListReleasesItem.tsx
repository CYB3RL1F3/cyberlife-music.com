import type { ListReleasesItemProps } from "./ListReleasesItem.types";
import ListItem from "~/components/molecules/ListItem";
import ListItemSnippet from "~/components/molecules/ListItemSnippet";
import dayjs from "dayjs";
import Picture from "../Picture";
import ListLinkIconsRelease from "~/components/organisms/ListLinkIconsRelease";

const ListReleasesItem = ({ release }: ListReleasesItemProps) => {
  const { title, slug, releaseDate, role, thumb, label } = release;

  const defaultThumb =
    "https://media.istockphoto.com/id/134119615/photo/vinyl-record.jpg";

  const artwork = thumb || defaultThumb;
  if (!title) return null;
  return (
    <ListItem thumbnail={<Picture alt={title} src={artwork} />}>
      <ListItemSnippet title={title} href={`${slug}`}>
        <div className="w-full h-14">
          <p className="text-sm italic text-right">{label}</p>
          <p className="text-sm italic text-right">
            {role?.concat(" - ")}
            {`Released on ${dayjs(releaseDate).format("DD/MM/YYYY")}`}
          </p>
        </div>
        <div className="w-full">
          <ListLinkIconsRelease release={release} />
        </div>
      </ListItemSnippet>
    </ListItem>
  );
};

export default ListReleasesItem;
