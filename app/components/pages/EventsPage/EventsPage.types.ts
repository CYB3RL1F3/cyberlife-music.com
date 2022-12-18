import type { EventsQuery } from "~/types/gql/EventsQuery";

export type EventsPageProps = {
  data?: EventsQuery;
  loading?: boolean;
};
