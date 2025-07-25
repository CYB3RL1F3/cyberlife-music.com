import { AnimatePresence } from 'framer-motion';
import type { OrderFunnelStep1Props } from './OrderFunnelStep1.types';
import FormHeading from '~/components/organisms/FormHeading';
import TableOrderResume from '~/components/organisms/TableOrderResume';
import FormOrderConsentContainer from '~/components/organisms/FormOrderConsentContainer';
import TableOrderPrice from '~/components/organisms/TableOrderPrice';
import ButtonLink from '~/components/atoms/ButtonLink';
import ButtonClearCart from '~/components/organisms/ButtonClearCart';

const OrderFunnelStep1 = ({ items, onSubmit }: OrderFunnelStep1Props) => {
  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col items-end justify-end w-full gap-4">
        <FormHeading
          title="Finalize the order!"
          description="Verify your order. If everything is fine, let's go!"
        />
        <TableOrderResume items={items} />
        <div className="w-full mt-4">
          <TableOrderPrice items={items} />
        </div>
        <FormOrderConsentContainer onSubmit={onSubmit}>
          <ButtonClearCart />
          <ButtonLink href="/releases" className="w-fit">
            Cancel
          </ButtonLink>
        </FormOrderConsentContainer>
      </div>
    </AnimatePresence>
  );
};

export default OrderFunnelStep1;
