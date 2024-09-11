import { CartItem } from "~/hooks/db/useCart";
import { FormCheckoutValues } from "../FormCheckout/FormCheckout.types";

  export type ButtonPaymentPaypalContainerProps = {
    onPaymentSuccess: () => void;
    items: CartItem[];
    checkout: FormCheckoutValues;
  }
  