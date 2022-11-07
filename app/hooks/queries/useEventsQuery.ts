import { gql, useQuery } from "@apollo/client";
import { profile } from "~/config";
import eventsQuery from "~/gql/queries/events.gql";
import type {
  EventsQuery,
  EventsQueryVariables
} from "~/types/gql/EventsQuery";

const query = gql`
  ${eventsQuery}
`;

export const useEventsQuery = () => {
  return useQuery<EventsQuery, EventsQueryVariables>(query, {
    variables: {
      profile
    }
  });
};
