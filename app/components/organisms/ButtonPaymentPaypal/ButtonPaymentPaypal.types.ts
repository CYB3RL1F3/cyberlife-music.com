import { CartItem } from "~/hooks/db/useCart"
import { FormCheckoutValues } from "../FormCheckout/FormCheckout.types";
import { PayPalButtonsComponentProps } from "@paypal/react-paypal-js";

  export type ButtonPaymentPaypalProps = Pick<PayPalButtonsComponentProps, 'onApprove' | 'createOrder' | 'onError' | 'onCancel'> & {
    disabled?: boolean;
  }
  