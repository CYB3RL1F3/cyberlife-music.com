import { CartItem } from "~/hooks/db/useCart"
import { FormCheckoutValues } from "../FormCheckout/FormCheckout.types";

  export type OrderPaymentProps = {
    items: CartItem[];
    checkout: FormCheckoutValues;
    onCancel?: () => void;
    onSuccess: () => void;
  }
  