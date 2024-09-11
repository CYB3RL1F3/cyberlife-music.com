import { CartItem } from "~/hooks/db/useCart"
import { FormCheckoutValues } from "~/components/organisms/FormCheckout/FormCheckout.types";
import { OrderPaymentContainerProps } from "../OrderPaymentContainer";

  export type OrderFunnelStep3Props = Pick<OrderPaymentContainerProps, 'onCancel' | 'onSuccess'>;
  