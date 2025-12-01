import { toast } from 'react-toastify';
import { Link } from '@remix-run/react';
import { useRef } from 'react';
import { PayPalButtonsComponentProps } from '@paypal/react-paypal-js';

import { getOrder } from '~/utils/business/purchase';
import { useReleasesQuery } from '~/hooks/queries/useReleasesQuery';
import { useIntentOrderPaypalMutation } from '~/hooks/mutations/useIntentOrderPaypalMutation';
import { useConfirmOrderPaypalMutation } from '~/hooks/mutations/useConfirmOrderPaypalMutation';
import ButtonPaymentPaypal from '~/components/organisms/ButtonPaymentPaypal/ButtonPaymentPaypal';
import ClientOnly from '~/components/atoms/ClientOnly';
import { useCancelOrderMutation } from '~/hooks/mutations/useCancelOrderPaypalMutation';

import type { ButtonPaymentPaypalContainerProps } from './ButtonPaymentPaypalContainer.types';

export type PaypalApproveParameters = {
  orderId: string;
};

const ButtonPaymentPaypalContainer = ({
  items,
  checkout,
  onPaymentSuccess,
}: ButtonPaymentPaypalContainerProps) => {
  const { data } = useReleasesQuery();
  const [intentOrder] = useIntentOrderPaypalMutation();
  const [confirmOrder] = useConfirmOrderPaypalMutation();
  const [cancelOrder] = useCancelOrderMutation();
  const currentOrderId = useRef<string | null>(null);

  const handleOrder = async () => {
    if (!data?.releaseItems) throw new Error('No release items');
    const order = getOrder(items, checkout, data.releaseItems);
    const { data: intentData } = await intentOrder(order);
    const orderId = intentData?.intentOrderPaypal?.order?._id;
    if (!orderId) {
      toast.error(
        'An error occurred while trying to pay. Please try again later.',
      );
      throw new Error('No order id');
    }

    currentOrderId.current = orderId;

    const id = intentData?.intentOrderPaypal?.paymentIntent?.intent?.id;
    if (!id) {
      toast.error(
        'An error occurred while trying to pay. Please try again later.',
      );
      throw new Error('No payment intent id');
    }

    return id;
  };

  const handleApprove: PayPalButtonsComponentProps['onApprove'] = async (
    value,
  ) => {
    if (!currentOrderId.current) {
      toast.error(
        'An error occurred while trying to pay. Please try again later.',
      );
      throw new Error('No current order id');
    }

    const { data } = await confirmOrder(currentOrderId.current, {
      id: value.orderID,
      transactionId: value.orderID,
      paymentMethod: 'paypal',
      transactionDate: new Date(),
    });
    const order = data?.confirmOrderPaypal;
    if (!order) {
      toast.error(
        'An error occurred while trying to pay. Please try again later.',
      );
      throw new Error('No order');
    }
    onPaymentSuccess();
  };

  const handleError: PayPalButtonsComponentProps['onError'] = async (error) => {
    toast.error(
      'An error occurred while trying to pay. Please try again later.',
    );
    console.error(error);
    if (!currentOrderId.current) return;
    try {
      await cancelOrder(currentOrderId.current);
    } catch (e) {
      console.error(e);
    }
  };

  if (!data?.releaseItems) return null;

  return (
    <ClientOnly
      fallback={
        <div className="flex justify-end">
          <div className="bg-gray-400 rounded">
            It appears that you can't process any payment from this page. Please
            try again later or <Link to="/contact">contact us</Link>.
          </div>
        </div>
      }
    >
      {() => (
        <ButtonPaymentPaypal
          createOrder={handleOrder}
          onApprove={handleApprove}
          onError={handleError}
        />
      )}
    </ClientOnly>
  );
};

export default ButtonPaymentPaypalContainer;
