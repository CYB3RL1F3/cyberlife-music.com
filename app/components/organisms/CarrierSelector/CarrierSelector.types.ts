import type { ReactNode } from 'react';
import { CartItem } from '~/hooks/db/useCart';
import { Carrier } from '~/hooks/data/useCarriers';

export type CarrierSelectorProps = {
  country: string;
  items: CartItem[];
  label?: ReactNode;
  value?: Carrier;
  onChange: (value: CarrierSelectorProps['value']) => void;
};
