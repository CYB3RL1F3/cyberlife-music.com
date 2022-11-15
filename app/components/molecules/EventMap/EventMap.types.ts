import type { EventQueryEvent } from "~/types/gql/EventQuery";

export type EventMapProps = {
  location: NonNullable<EventQueryEvent["location"]>;
};
