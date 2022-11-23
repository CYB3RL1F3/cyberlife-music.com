import { gql } from "@apollo/client";
import { profile } from "~/config";
import eventsQuery from "~/gql/queries/events.gql";
import type {
  EventsQuery,
  EventsQueryVariables
} from "~/types/gql/EventsQuery";
import { runQuery } from "~/utils/graphql";

export const eventsGqlQuery = gql`
  ${eventsQuery}
`;

export const runEventsQuery = () => {
  return runQuery<EventsQuery, EventsQueryVariables>(eventsGqlQuery, {
    profile
  });
};
