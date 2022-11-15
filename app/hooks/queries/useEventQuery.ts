import { gql, useQuery } from "@apollo/client";
import { profile } from "~/config";
import eventQuery from "~/gql/queries/event.gql";
import eventFragment from "~/gql/fragments/events.gql";
import type { EventQuery, EventQueryVariables } from "~/types/gql/EventQuery";

const query = gql`
  ${eventFragment}
  ${eventQuery}
`;

export const useEventQuery = (id: string) => {
  return useQuery<EventQuery, EventQueryVariables>(query, {
    variables: {
      profile,
      id
    }
  });
};
