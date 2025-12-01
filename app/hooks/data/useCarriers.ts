import { useMemo } from 'react';

import { useCarrierPricesQuery } from '~/hooks/queries/useCarrierPricesQuery';
import { useReleasesQuery } from '~/hooks/queries/useReleasesQuery';
import { CartItem } from '~/hooks/db/useCart';
import { CarrierPricesQueryVariables, ReleaseItem } from '~/types/gql';

export type Carrier = {
  carrier: string;
  price: number;
};

export const useCarrierPrices = (country: string, items: CartItem[]) => {
  const { data } = useReleasesQuery();

  const getProduct = (item: CartItem, releaseItems: ReleaseItem[]) => {
    const value = releaseItems.find(
      (releaseItem) => releaseItem.id === item.id,
    )?.release!;

    return value;
  };

  const cartItems: CarrierPricesQueryVariables['items'] =
    data?.releaseItems && items
      ? items.map((item) => ({
          amount: item.amount,
          quantity: item.quantity,
          productId: item.productId,
          id: item.id,
          product: getProduct(item, data.releaseItems),
        }))
      : [];

  const carriers = useCarrierPricesQuery(country, cartItems);

  const carrierPrices = useMemo(() => {
    const value = [];
    const prices = carriers.data?.carrierPrices;
    if (prices?.colissimoPrice) {
      value.push({
        id: 'colissimo',
        label: `La Poste (Colissimo) +${prices.colissimoPrice} € fee`,
        value: {
          carrier: 'laposte',
          price: prices.colissimoPrice,
        },
      });
    }

    if (prices?.upsPrice) {
      value.push({
        id: 'ups',
        label: `UPS +${prices.upsPrice} € fee`,
        value: {
          carrier: 'ups',
          price: prices.upsPrice,
        },
      });
    }

    if (prices?.mondialRelayPrice) {
      value.push({
        id: 'mondialRelay',
        label: `Mondial Relay +${prices.mondialRelayPrice} € fee`,
        value: {
          carrier: 'mondial_relay',
          price: prices.mondialRelayPrice,
        },
      });
    }

    if (value.length) {
      value.push({
        id: 'pickup',
        label: 'No carrier - pick up physically',
        value: {
          carrier: 'pickup',
          price: 0,
        },
      });
    }

    return value;
  }, [carriers.data]);

  return carrierPrices;
};
