import HandlerContent from '~/components/molecules/HandlerContent';
import OrderFunnel from '../OrderFunnel/OrderFunnel';
import { useCart } from '~/hooks/db/useCart';
import Loader from '~/components/molecules/Loader';
import { useEffect, useState } from 'react';
import useDebounceEffect from '~/hooks/useDebouncedEffect';

const OrderFunnelContainer = () => {
  const { currentStep, items } = useCart();
  const [loading, setLoading] = useState(currentStep === -1);

  useEffect(() => {
    if (currentStep > -1) {
      setLoading(false);
    }
  }, [currentStep]);

  useDebounceEffect(
    () => {
      setLoading(false);
    },
    [],
    2000,
  );

  return (
    <HandlerContent
      loading={loading}
      loader={<Loader message="Please wait while we're loading your cart..." />}
    >
      <OrderFunnel items={items} defaultStep={currentStep} />
    </HandlerContent>
  );
};

export default OrderFunnelContainer;
