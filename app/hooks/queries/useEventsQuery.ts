import { useQuery } from '@apollo/client/react';
import { profile } from '~/config';
import { eventsGqlQuery } from '~/queries/events';
import { EventsQuery, EventsQueryVariables } from '~/types/gql';

export const useEventsQuery = () => {
  return useQuery<EventsQuery, EventsQueryVariables>(eventsGqlQuery, {
    variables: {
      profile,
    },
  });
};
