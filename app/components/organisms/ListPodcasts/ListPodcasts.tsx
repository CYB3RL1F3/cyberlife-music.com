import List from "~/components/molecules/List";
import ListPodcastsItem from "../ListPodcastsItem";
import type { ListPodcastsProps } from "./ListPodcasts.types";

const ListPodcasts = ({ podcasts, artwork }: ListPodcastsProps) => {
  return (
    <List>
      {podcasts?.map((podcast) =>
        podcast.title && podcast.waveform ? (
          <ListPodcastsItem
            key={podcast.id}
            podcast={podcast}
            artworkFallback={artwork}
          />
        ) : null
      )}
    </List>
  );
};

export default ListPodcasts;
