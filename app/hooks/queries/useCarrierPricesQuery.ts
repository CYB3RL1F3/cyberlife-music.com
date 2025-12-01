import { useQuery } from '@apollo/client/react';
import { carrierPricesGqlQuery } from '~/queries/carrierPrices';
import { profile } from '~/config';
import { CarrierPricesQuery, CarrierPricesQueryVariables } from '~/types/gql';

export const useCarrierPricesQuery = (
  country: CarrierPricesQueryVariables['country'],
  items: CarrierPricesQueryVariables['items'],
) => {
  return useQuery<CarrierPricesQuery, CarrierPricesQueryVariables>(
    carrierPricesGqlQuery,
    {
      variables: {
        country,
        items,
        profile,
      },
      skip: !items.length || !country,
    },
  );
};
