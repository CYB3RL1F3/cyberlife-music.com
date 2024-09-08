import HandlerContent from '~/components/molecules/HandlerContent';
import OrderFunnel from '../OrderFunnel/OrderFunnel';
import { useCart } from '~/hooks/db/useCart';
import Loader from '~/components/molecules/Loader';

const OrderFunnelContainer = () => {
  const { items, consent } = useCart();
  console.log('consent ==> ', consent);
  return (
    <HandlerContent
      loading={typeof consent === 'undefined'}
      loader={<Loader message="Please wait while we're loading your cart..." />}
    >
      <OrderFunnel items={items} defaultStep={consent ? 1 : 0} />
    </HandlerContent>
  );
  return <OrderFunnel items={items} defaultStep={consent ? 1 : 0} />;
};

export default OrderFunnelContainer;
