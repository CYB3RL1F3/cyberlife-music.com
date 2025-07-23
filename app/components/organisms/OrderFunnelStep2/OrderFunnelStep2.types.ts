import { CartItem } from "~/hooks/db/useCart"
;
import { FormCheckoutProps } from "~/components/organisms/FormCheckout";

  export type OrderFunnelStep2Props = Pick<FormCheckoutProps, "onSubmit"> & {
    items: CartItem[];
    onCancel?: () => void;
  }
  
  