import { CartItem } from "~/hooks/db/useCart";
import { Carrier } from "~/hooks/useCarriers";

  export type TableFinalOrderProps = {
    items: CartItem[];
    carrier: Carrier;
  }
  