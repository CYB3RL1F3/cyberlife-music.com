import { AnimatePresence } from 'framer-motion';

import FormHeading from '~/components/organisms/FormHeading';
import OrderPaymentContainer from '~/components/organisms/OrderPaymentContainer';

import { OrderFunnelStep3Props } from './OrderFunnelStep3.types';

const OrderFunnelStep3 = ({ ...props }: OrderFunnelStep3Props) => {
  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col items-end justify-end w-full">
        <FormHeading
          title="Finalize the order!"
          description="Choose now your payment method to finalize the order."
        />
        <OrderPaymentContainer {...props} />
      </div>
    </AnimatePresence>
  );
};

export default OrderFunnelStep3;
