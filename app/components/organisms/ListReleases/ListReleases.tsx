import List from "~/components/organisms/List";
import ListReleasesItem from "~/components/organisms/ListReleasesItem";
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
