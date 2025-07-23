import type { CartItem } from "~/hooks/db/useCart"


  export type OrderFunnelProps = {
    items: CartItem[];
    defaultStep?: number;
  }
  