import { PlaylistTrackQuery } from "~/types/gql/PlaylistTrackQuery";

export type PodcastPageProps = {
  data?: PlaylistTrackQuery;
  loading?: boolean;
};
