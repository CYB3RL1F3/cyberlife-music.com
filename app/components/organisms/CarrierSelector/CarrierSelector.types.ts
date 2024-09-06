import { NonUndefined } from "react-hook-form";
import { CartItem } from "~/hooks/db/useCart";
import { Carrier } from "~/hooks/useCarriers";

  export type CarrierSelectorProps = {
    country: string;
    items: CartItem[];
    label?: string;
    value?: Carrier;
    onChange: (value: CarrierSelectorProps['value']) => void;
  }
  