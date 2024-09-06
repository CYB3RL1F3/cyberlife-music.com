import { CartItem } from "~/hooks/db/useCart"

import { FormOrderConsentProps } from "../FormOrderConsent";

  export type OrderFunnelStep1Props = Pick<FormOrderConsentProps, "onSubmit"> & {
    items: CartItem[];
  }
  