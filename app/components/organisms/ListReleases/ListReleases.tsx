import List from "~/components/organisms/List";
import ListReleasesItem from "~/components/organisms/ListReleasesItem";
import DisplayEmptyList from "~/components/organisms/DisplayEmptyList";
import type { ListReleasesProps } from "./ListReleases.types";

const ListReleases = ({ releases }: ListReleasesProps) => {
  if (!releases?.length) {
    return <DisplayEmptyList children="No releases to show here!" />;
  }
  return (
    <List>
      {releases.map((release) =>
        release.release?.title ? (
          <ListReleasesItem key={release.id} release={release} />
        ) : null
      )}
    </List>
  );
};

export default ListReleases;
