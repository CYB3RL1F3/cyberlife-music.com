import Ellipsis from '~/components/molecules/Ellipsis';
import ListItem from '~/components/molecules/ListItem';
import ListItemSnippet from '~/components/molecules/ListItemSnippet';
import Thumbnail from '~/components/molecules/Thumbnail';
import PlayerPodcastTrackContainer from '~/components/organisms/PlayerPodcastTrackContainer';
import PodcastActionPlayContainer from '~/components/organisms/PodcastActionPlayContainer';
import ListLinkIconsPodcast from '~/components/organisms/ListLinkIconsPodcast';

import type { ListPodcastsItemProps } from './ListPodcastsItem.types';

const ListPodcastsItem = ({
  podcast,
  artworkFallback,
  podcasts,
}: ListPodcastsItemProps) => {
  const { artwork, title, slug, description, waveform } = podcast;
  if (!title || !waveform) return null;
  return (
    <ListItem
      thumbnail={
        <Thumbnail src={artwork || artworkFallback || ''}>
          <PodcastActionPlayContainer podcasts={podcasts} track={podcast} />
        </Thumbnail>
      }
    >
      <ListItemSnippet title={title} href={`/podcasts/${slug}`}>
        <div className="flex flex-col justify-between w-full h-16">
          <Ellipsis className="pr-2 text-xs italic text-right md:text-sm">
            {description}
          </Ellipsis>
          <div className="flex justify-end w-full pr-1 mb-1">
            <ListLinkIconsPodcast podcast={podcast} />
          </div>
        </div>
        <div className="hidden md:block">
          <PlayerPodcastTrackContainer track={podcast} podcasts={podcasts} />
        </div>
      </ListItemSnippet>
    </ListItem>
  );
};

export default ListPodcastsItem;
