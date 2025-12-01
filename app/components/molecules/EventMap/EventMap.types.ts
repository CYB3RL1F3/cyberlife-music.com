import { Event } from '~/types/gql';

export type EventMapProps = {
  location: NonNullable<Event['location']>;
  height?: number;
};
