import OrderPayment from '~/components/organisms/OrderPayment/OrderPayment';
import { useCart } from '~/hooks/db/useCart';

import type { OrderPaymentContainerProps } from './OrderPaymentContainer.types';

const OrderPaymentContainer = ({ ...props }: OrderPaymentContainerProps) => {
  const { items, checkout, confirmedCheckout } = useCart();
  if (!items || !checkout || !confirmedCheckout) {
    return (
      <p className="text-red-400">
        Missing informations in cart. Impossible to proceed any payment.
      </p>
    );
  }

  return <OrderPayment items={items} checkout={checkout} {...props} />;
};

export default OrderPaymentContainer;
