import { gql } from "@apollo/client";
import { profile } from "~/config";
import carrierPricesQuery from "~/gql/queries/carrierPrices.gql";
import type { EventQuery, EventQueryVariables } from "~/types/gql/EventQuery";
import { runQuery } from "~/utils/graphql";

export const carrierPricesGqlQuery = gql`
  ${carrierPricesQuery}
`;

export const runEventQuery = (id: string) => {
  return runQuery<EventQuery, EventQueryVariables>(carrierPricesGqlQuery, {
    profile,
    id
  });
};
