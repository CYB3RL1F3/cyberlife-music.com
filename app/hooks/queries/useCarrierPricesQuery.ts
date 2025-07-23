import { useQuery } from '@apollo/client';
import type {
  CarrierPrices,
  CarrierPricesVariables,
} from '~/types/gql/CarrierPrices';
import { carrierPricesGqlQuery } from '~/queries/carrierPrices';
import { profile } from '~/config';

export const useCarrierPricesQuery = (
  country: CarrierPricesVariables['country'],
  items: CarrierPricesVariables['items'],
) => {
  return useQuery<CarrierPrices, CarrierPricesVariables>(
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
