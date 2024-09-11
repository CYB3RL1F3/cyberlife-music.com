import { FormCheckoutValues } from '~/components/organisms/FormCheckout/FormCheckout.types';
import { CartItem } from '~/hooks/db/useCart';
import { OrderDto, ReleaseDtoInput } from '~/types/gql/globalTypes';
import { ReleasesQueryReleaseItems } from '~/types/gql/ReleasesQuery';
import { getConfig } from '../config';

export const round = (value: number, decimals: number) => {
  return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
};

export const getHtPrice = (items: CartItem[]) => {
  const htPrice = items.reduce((acc, item) => {
    return acc + (item.release?.price || 0) * item.quantity;
  }, 0);
  return round(htPrice, 2);
};

export const getTtcPrice = (items: CartItem[]) => {
  const ttcPrice = getHtPrice(items) * 1.2;
  return round(ttcPrice, 2);
};

export const getVat = (items: CartItem[]) => {
  return getHtPrice(items) * 0.2;
}

export const getProduct = (
  item: CartItem,
  releaseItems: ReleasesQueryReleaseItems[],
): ReleaseDtoInput => {
  const value = releaseItems.find(
    (releaseItem) => releaseItem.id === item.id,
  )?.release!;
  const { _id, __typename, ...release } = value;
  return release;
};

export const getOrder = (
  items: CartItem[],
  checkout: FormCheckoutValues,
  releases: ReleasesQueryReleaseItems[],
) => {
  const webshopId = getConfig()?.webshopId;

  if (!webshopId) {
    throw new Error('No webshop id');
  }

  const order: OrderDto = {
    webshopId,
    cart: {
      items: items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        amount: item.release?.price || 0,
        productId: item.productId,
        product: getProduct(item, releases),
      })),
      amount: getHtPrice(items),
      amountWithTax: getTtcPrice(items),
      vat: getVat(items),
    },
    orderAt: new Date(),
    updatedAt: new Date(),
    query: checkout.query,
    expedition: {
      service: checkout.carrier.carrier,
      status: 'pending',
      address: checkout.expedition.isSameAsBilling
        ? {
            name: `${checkout.firstName} ${checkout.lastName}`,
            city: checkout.city,
            country: checkout.country,
            zipCode: checkout.zipCode,
            address: checkout.address,
          }
        : {
            name: `${checkout.expedition.firstName} ${checkout.expedition.lastName}`,
            city: checkout.expedition.city!,
            country: checkout.expedition.country!,
            zipCode: checkout.expedition.zipCode!,
            address: checkout.expedition.address!,
          },
      email: checkout.email,
      phone: checkout.phone,
      amountWithTax: checkout.carrier.price,
      vat: 0.2,
    },
    billing: {
      address: {
        name: `${checkout.firstName} ${checkout.lastName}`,
        city: checkout.city,
        country: checkout.country,
        zipCode: checkout.zipCode,
        address: checkout.address,
      },
      firstName: checkout.firstName,
      lastName: checkout.lastName,
      email: checkout.email,
      phone: checkout.phone,
    },
  };
  return order;
};
