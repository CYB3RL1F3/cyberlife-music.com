import HandlerContent from '~/components/molecules/HandlerContent';
import OrderFunnel from '../OrderFunnel/OrderFunnel';
import { useCart } from '~/hooks/db/useCart';
import Loader from '~/components/molecules/Loader';

const OrderFunnelContainer = () => {
  const { currentStep, items, loaded } = useCart();

  return (
    <HandlerContent
      loading={!loaded}
      loader={<Loader message="Please wait while we're loading your cart..." />}
    >
      <OrderFunnel items={items} defaultStep={currentStep} />
    </HandlerContent>
  );
};

export default OrderFunnelContainer;
