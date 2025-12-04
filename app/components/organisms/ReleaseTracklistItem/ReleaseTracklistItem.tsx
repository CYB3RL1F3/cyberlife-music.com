import ListItem from '~/components/molecules/ListItem';
import ListItemSnippet from '~/components/molecules/ListItemSnippet';
import Thumbnail from '~/components/molecules/Thumbnail';
import ReleaseActionPlayContainer from '~/components/organisms/ReleaseActionPlayContainer';
import PlayerReleaseTrackContainer from '~/components/organisms/PlayerReleaseTrackContainer';
import { defaultThumb } from '~/components/organisms/ReleaseDetails/ReleaseDetails';

import type { ReleaseTracklistItemProps } from './ReleaseTracklistItem.types';

const ReleaseTracklistItem = ({
  track,
  release,
}: ReleaseTracklistItemProps) => {
  const { title, stream } = track;
  const { thumb = defaultThumb } = release;
  if (!stream) return null;
  const { artwork } = stream;

  return (
    <ListItem
      thumbnail={
        <Thumbnail src={artwork || thumb || defaultThumb}>
          <ReleaseActionPlayContainer track={stream} release={release} />
        </Thumbnail>
      }
    >
      <ListItemSnippet title={title || defaultThumb}>
        <div className="w-full h-16" />
        <div className="max-md:hidden">
          <PlayerReleaseTrackContainer track={stream} release={release} />
        </div>
      </ListItemSnippet>
    </ListItem>
  );
};

export default ReleaseTracklistItem;
