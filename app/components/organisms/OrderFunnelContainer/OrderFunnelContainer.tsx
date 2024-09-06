import OrderFunnel from "../OrderFunnel/OrderFunnel";
import { useCart } from "~/hooks/db/useCart";

  const OrderFunnelContainer = () => {
    const { items } = useCart();
    return <OrderFunnel items={items} />;
  }

  export default OrderFunnelContainer;
  