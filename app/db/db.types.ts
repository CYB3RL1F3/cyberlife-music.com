import type { FormCheckoutValues } from '~/components/organisms/FormCheckout/FormCheckout.types';
import type { CartItem } from '~/hooks/db/useCart';

export type Like = {
  id?: string;
  value: boolean;
};

export type Cart = {
  items: CartItem[];
  consent: boolean;
  confirmedCheckout?: boolean;
  checkout?: FormCheckoutValues;
};
