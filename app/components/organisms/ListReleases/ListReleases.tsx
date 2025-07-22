import List from '~/components/organisms/List';
import ListReleasesItem from '~/components/organisms/ListReleasesItem';
import DisplayEmptyList from '~/components/organisms/DisplayEmptyList';
import type { ListReleasesProps } from './ListReleases.types';
import dayjs from 'dayjs';

const ListReleases = ({ releases }: ListReleasesProps) => {
  if (!releases?.length) {
    return <DisplayEmptyList children="No releases to show here!" />;
  }

  const sortedReleases = [...releases].sort((a, b) => {
    const dateA = a.release?.releaseDate
      ? dayjs(a.release.releaseDate)
      : dayjs();
    const dateB = b.release?.releaseDate
      ? dayjs(b.release.releaseDate)
      : dayjs();
    return dateB.diff(dateA);
  });

  return (
    <List>
      {sortedReleases.map((release) =>
        release.release?.title ? (
          <ListReleasesItem key={release.id} release={release} />
        ) : null,
      )}
    </List>
  );
};

export default ListReleases;
