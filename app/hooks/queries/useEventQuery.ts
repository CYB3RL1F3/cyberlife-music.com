import { useQuery } from "@apollo/client";
import { profile } from "~/config";
import type { EventQuery, EventQueryVariables } from "~/types/gql/EventQuery";
import { eventGqlQuery } from "~/queries/event";

export const useEventQuery = (id: EventQueryVariables["id"]) => {
  return useQuery<EventQuery, EventQueryVariables>(eventGqlQuery, {
    variables: {
      profile,
      id
    }
  });
};
