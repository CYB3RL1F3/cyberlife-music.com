import { AnimatePresence } from 'framer-motion';
import type { OrderFunnelStep2Props } from './OrderFunnelStep2.types';
import FormHeading from '~/components/organisms/FormHeading';
import FormCheckoutContainer from '~/components/organisms/FormCheckoutContainer';

const OrderFunnelStep2 = (props: OrderFunnelStep2Props) => {
  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col items-end justify-end w-full">
        <FormHeading
          title="Complete the order!"
          description="Complete this form with your shipping details."
        />
        <FormCheckoutContainer {...props} />
      </div>
    </AnimatePresence>
  );
};

export default OrderFunnelStep2;
