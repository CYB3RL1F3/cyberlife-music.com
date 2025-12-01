import { gql } from '@apollo/client';

import { profile } from '~/config';
import carrierPricesQuery from '~/gql/queries/carrierPrices.gql';
import type {
  CarrierPricesQuery,
  CarrierPricesQueryVariables,
} from '~/types/gql';
import { runQuery } from '~/utils/graphql';

export const carrierPricesGqlQuery = gql`
  ${carrierPricesQuery}
`;

export const runCarrierPricesQuery = (
  country: CarrierPricesQueryVariables['country'],
  items: CarrierPricesQueryVariables['items'],
) => {
  return runQuery<CarrierPricesQuery, CarrierPricesQueryVariables>(
    carrierPricesGqlQuery,
    {
      country,
      items,
      profile,
    },
  );
};
