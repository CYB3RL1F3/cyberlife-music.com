import dayjs from 'dayjs';

import ListItem from '~/components/molecules/ListItem';
import ListItemSnippet from '~/components/molecules/ListItemSnippet';
import Picture from '~/components/organisms/Picture';
import ListLinkIconsRelease from '~/components/organisms/ListLinkIconsRelease';

import type { ListReleasesItemProps } from './ListReleasesItem.types';
import Thumbnail from '~/components/molecules/Thumbnail';
import ReleaseActionPlayContainer from '../ReleaseActionPlayContainer';

const ListReleasesItem = ({ release }: ListReleasesItemProps) => {
  if (!release.release) return null;

  const { title, slug, artist, tracklist, releaseDate, role, thumb, label } =
    release.release;

  if (!title) return null;

  const defaultThumb =
    'https://media.istockphoto.com/id/134119615/photo/vinyl-record.jpg';

  const artwork = thumb || defaultThumb;
  const firstTrack = tracklist?.[0].stream;
  const nextId = tracklist?.[1]?.stream?.id;

  return (
    <ListItem
      thumbnail={
        <Thumbnail src={artwork}>
          {firstTrack && (
            <ReleaseActionPlayContainer
              track={firstTrack}
              album={release.name}
              pageUrl={`/releases/${slug}`}
              artist={artist}
              nextId={nextId}
            />
          )}
        </Thumbnail>
      }
    >
      <ListItemSnippet title={title} href={`/releases/${slug}`}>
        <div className="w-full h-14">
          <p className="text-sm italic text-right">{label}</p>
          <p className="text-sm italic text-right">
            {role?.concat(' - ')}
            {`Released on ${dayjs(releaseDate).format('DD/MM/YYYY')}`}
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
