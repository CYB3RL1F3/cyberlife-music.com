import { gql } from '@apollo/client';
import { profile } from '~/config';
import eventsQuery from '~/gql/queries/events.gql';
import eventsFragment from '~/gql/fragments/events.gql';
import { runQuery } from '~/utils/graphql';
import { EventsQuery, EventsQueryVariables } from '~/types/gql';

export const eventsGqlQuery = gql`
  ${eventsFragment}
  ${eventsQuery}
`;

export const runEventsQuery = () => {
  return runQuery<EventsQuery, EventsQueryVariables>(eventsGqlQuery, {
    profile,
  });
};
