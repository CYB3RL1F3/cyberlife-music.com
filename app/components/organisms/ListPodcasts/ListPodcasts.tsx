import List from '~/components/organisms/List';
import DisplayEmptyList from '~/components/organisms/DisplayEmptyList';
import ListPodcastsItem from '~/components/organisms/ListPodcastsItem';
import type { ListPodcastsProps } from './ListPodcasts.types';

const ListPodcasts = ({ podcasts, artwork }: ListPodcastsProps) => {
  if (!podcasts?.length) {
    return <DisplayEmptyList children="No podcasts to show here!" />;
  }

  return (
    <List>
      {podcasts.map((podcast) =>
        podcast.title && podcast.waveform ? (
          <ListPodcastsItem
            key={podcast.id}
            podcast={podcast}
            artworkFallback={artwork}
          />
        ) : null,
      )}
    </List>
  );
};

export default ListPodcasts;
