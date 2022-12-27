import { gql } from "@apollo/client";
import { profile } from "~/config";
import eventsQuery from "~/gql/queries/events.gql";
import eventsSnippetFragment from "~/gql/fragments/eventSnippet.gql";
import type {
  EventsQuery,
  EventsQueryVariables
} from "~/types/gql/EventsQuery";
import { runQuery } from "~/utils/graphql";

export const eventsGqlQuery = gql`
  ${eventsSnippetFragment}
  ${eventsQuery}
`;

export const runEventsQuery = () => {
  return runQuery<EventsQuery, EventsQueryVariables>(eventsGqlQuery, {
    profile
  });
};
