import type { PlaylistQuery } from "~/types/gql/PlaylistQuery";

export type PodcastsPageProps = {
  data?: PlaylistQuery;
  loading?: boolean;
};
