import ListItem from '~/components/molecules/ListItem';
import ListItemSnippet from '~/components/molecules/ListItemSnippet';
import Thumbnail from '~/components/molecules/Thumbnail';
import type { ReleaseTracklistItemProps } from './ReleaseTracklistItem.types';
import ReleaseActionPlayContainer from '~/components/organisms/ReleaseActionPlayContainer';
import PlayerReleaseTrackContainer from '~/components/organisms/PlayerReleaseTrackContainer';

const ReleaseTracklistItem = ({
  track,
  thumb,
  album,
  nextId,
  prevId,
}: ReleaseTracklistItemProps) => {
  const { title, stream, artists } = track;
  if (!stream) return null;
  const { artwork } = stream;
  return (
    <ListItem
      thumbnail={
        <Thumbnail src={artwork || thumb || ''}>
          <ReleaseActionPlayContainer
            track={stream}
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
            artists={artists}
            album={album}
            nextId={nextId}
            prevId={prevId}
          />
        </div>
      </ListItemSnippet>
    </ListItem>
  );
};

export default ReleaseTracklistItem;
