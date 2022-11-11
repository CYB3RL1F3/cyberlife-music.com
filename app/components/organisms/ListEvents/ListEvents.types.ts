import type { EventsQueryEvents } from "~/types/gql/EventsQuery";

export type ListEventsProps = {
  events?: EventsQueryEvents[];
};

export type SplittedEvents = {
  forthcomingEvents: EventsQueryEvents[];
  pastEvents: EventsQueryEvents[];
};
