import type { OrderPaymentProps } from './OrderPayment.types';
import Button from '~/components/atoms/Button';
import ButtonLink from '~/components/atoms/ButtonLink';
import TableFinalOrder from '~/components/organisms/TableFinalOrder';
import TableOrderResume from '~/components/organisms/TableOrderResume';
import OrderShippingResume from '~/components/organisms/OrderShippingResume';
import ButtonClearCart from '~/components/organisms/ButtonClearCart';
import ButtonPaymentPaypalContainer from '~/components/organisms/ButtonPaymentPaypalContainer';

const OrderPayment = ({
  items,
  checkout,
  onCancel,
  onSuccess,
}: OrderPaymentProps) => {
  return (
    <div className="w-full o-8">
      <div className="flex gap-8 max-lg:flex-col">
        <div className="w-full lg:w-2/3 o-4">
          <h3 className="text-lg text-right text-gray-300 lg:text-xl">
            Order resume:
          </h3>
          <TableOrderResume readonly items={items} />
          <TableFinalOrder carrier={checkout.carrier} items={items} />
        </div>
        <div className="w-full lg:w-1/3 o-4">
          <h3 className="pb-2 text-lg text-right text-gray-300 lg:text-xl">
            Shipping infos:
          </h3>
          <OrderShippingResume checkout={checkout} />
        </div>
      </div>
      <div className="flex flex-wrap-reverse justify-end w-full gap-4">
        <ButtonClearCart />
        <ButtonLink href="/releases">Continue shopping</ButtonLink>
        <Button className="w-fit" onClick={onCancel}>
          Edit shipping infos
        </Button>
      </div>
      <hr className="border-2 border-gray-400" />

      <h2 className="text-lg font-bold text-right text-gray-100 lg:text-xl">
        Choose your payment method
      </h2>
      {
        <div className="flex justify-end">
          <ButtonPaymentPaypalContainer
            onPaymentSuccess={onSuccess}
            items={items}
            checkout={checkout}
          />
        </div>
      }
    </div>
  );
};

export default OrderPayment;
