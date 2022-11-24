import type { ReleasesQuery } from "~/types/gql/ReleasesQuery";

export type ReleasesPageProps = {
  data?: ReleasesQuery;
  loading?: boolean;
};
