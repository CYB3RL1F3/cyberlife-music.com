import { gql } from '@apollo/client';
import { profile } from '~/config';
import carrierPricesQuery from '~/gql/queries/carrierPrices.gql';
import type {
  CarrierPrices,
  CarrierPricesVariables,
} from '~/types/gql/CarrierPrices';
import { runQuery } from '~/utils/graphql';

export const carrierPricesGqlQuery = gql`
  ${carrierPricesQuery}
`;

export const runCarrierPricesQuery = (
  country: CarrierPricesVariables['country'],
  items: CarrierPricesVariables['items'],
) => {
  return runQuery<CarrierPrices, CarrierPricesVariables>(
    carrierPricesGqlQuery,
    {
      country,
      items,
      profile,
    },
  );
};
