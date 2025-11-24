import { useQuery } from '@apollo/client/react';
import { profile } from '~/config';
import type {
  EventsQuery,
  EventsQueryVariables,
} from '~/types/gql/EventsQuery';
import { eventsGqlQuery } from '~/queries/events';

export const useEventsQuery = () => {
  return useQuery<EventsQuery, EventsQueryVariables>(eventsGqlQuery, {
    variables: {
      profile,
    },
  });
};
