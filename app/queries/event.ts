import { gql } from '@apollo/client';
import { profile } from '~/config';
import eventQuery from '~/gql/queries/event.gql';
import eventFragment from '~/gql/fragments/events.gql';
import type { EventQuery, EventQueryVariables } from '~/types/gql';
import { runQuery } from '~/utils/graphql';

export const eventGqlQuery = gql`
  ${eventFragment}
  ${eventQuery}
`;

export const runEventQuery = (id: string) => {
  return runQuery<EventQuery, EventQueryVariables>(eventGqlQuery, {
    profile,
    id,
  });
};
