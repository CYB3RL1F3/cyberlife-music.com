import { AnimatePresence, useWillChange } from 'framer-motion';
import type { OrderFunnelStep1Props } from './OrderFunnelStep1.types';
import FormHeading from '~/components/organisms/FormHeading';
import TableOrderResume from '~/components/organisms/TableOrderResume';
import FormOrderConsentContainer from '~/components/organisms/FormOrderConsentContainer';
import TableOrderPrice from '~/components/organisms/TableOrderPrice';
import ButtonLink from '~/components/atoms/ButtonLink';
import ButtonClearCart from '~/components/organisms/ButtonClearCart';
import { motion } from 'framer-motion';
import { useFluidTransition } from '~/hooks/misc/useFluidTransition';

const OrderFunnelStep1 = ({ items, onSubmit }: OrderFunnelStep1Props) => {
  const willChange = useWillChange();

  const transition = useFluidTransition({
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 20,
    },
    style: { willChange },
  });

  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col items-end justify-end w-full gap-4">
        <FormHeading
          title="Finalize the order!"
          description="Verify your order. If everything is fine, let's go!"
        />
        <motion.div {...transition(0.05)} className="w-full mt-4">
          <TableOrderResume items={items} />
        </motion.div>
        <motion.div {...transition(0.1)} className="w-full mt-4">
          <TableOrderPrice items={items} />
        </motion.div>
        <motion.div {...transition(0.15)} className="w-full mt-4">
          <FormOrderConsentContainer onSubmit={onSubmit}>
            <ButtonClearCart />
            <ButtonLink href="/releases" className="w-fit">
              Cancel
            </ButtonLink>
          </FormOrderConsentContainer>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default OrderFunnelStep1;
