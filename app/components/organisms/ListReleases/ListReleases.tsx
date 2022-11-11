import List from "~/components/molecules/List";
import ListReleasesItem from "../ListReleasesItem";
import type { ListReleasesProps } from "./ListReleases.types";

const ListReleases = ({ releases }: ListReleasesProps) => {
  return (
    <List>
      {releases?.map((release) =>
        release.title ? (
          <ListReleasesItem key={release._id} release={release} />
        ) : null
      )}
    </List>
  );
};

export default ListReleases;
