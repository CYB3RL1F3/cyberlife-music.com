import List from "~/components/molecules/List";
import type { ListPodcastsProps } from "./ListPodcasts.types";

const ListPodcasts = ({ podcasts }: ListPodcastsProps) => {
  return (
    <List>
      {podcasts?.map((podcast) => (
        <div key={podcast.id}>{podcast.title}</div>
      ))}
    </List>
  );
};

export default ListPodcasts;
