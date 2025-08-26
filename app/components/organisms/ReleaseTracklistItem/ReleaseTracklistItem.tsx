import ListItem from '~/components/molecules/ListItem';
import ListItemSnippet from '~/components/molecules/ListItemSnippet';
import Thumbnail from '~/components/molecules/Thumbnail';
import type { ReleaseTracklistItemProps } from './ReleaseTracklistItem.types';
import ReleaseActionPlayContainer from '~/components/organisms/ReleaseActionPlayContainer';
import PlayerReleaseTrackContainer from '~/components/organisms/PlayerReleaseTrackContainer';
import { useLocation } from '@remix-run/react';

const ReleaseTracklistItem = ({
  track,
  thumb,
  id,
  album,
  nextId,
  prevId,
}: ReleaseTracklistItemProps) => {
  const { title, stream, artists } = track;
  if (!stream) return null;
  const { artwork } = stream;
  const { pathname } = useLocation();
  return (
    <ListItem
      thumbnail={
        <Thumbnail src={artwork || thumb || ''}>
          <ReleaseActionPlayContainer
            track={stream}
            id={id}
            album={album}
            artist={artists?.map(({ name }) => name).join(', ')}
            nextId={nextId}
            prevId={prevId}
          />
        </Thumbnail>
      }
    >
      <ListItemSnippet title={title || ''}>
        <div className="w-full h-16" />
        <div className="max-md:hidden">
          <PlayerReleaseTrackContainer
            track={stream}
            id={id}
            artists={artists}
            album={album}
            nextId={nextId}
            prevId={prevId}
            uniqId={pathname.replace('/', '_')}
          />
        </div>
      </ListItemSnippet>
    </ListItem>
  );
};

export default ReleaseTracklistItem;
