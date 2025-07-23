import { getConfig } from '~/utils/config';
import type { ButtonPaymentPaypalProps } from './ButtonPaymentPaypal.types';
import {
  PayPalScriptProvider,
  PayPalButtons,
  ScriptProviderProps,
} from '@paypal/react-paypal-js';

const ButtonPaymentPaypal = ({
  createOrder,
  onApprove,
  onError,
  onCancel,
  disabled,
}: ButtonPaymentPaypalProps) => {
  const clientId = getConfig()?.paypal?.clientId;

  if (!clientId) {
    return null;
  }

  const initialOptions: ScriptProviderProps['options'] = {
    clientId,
    currency: 'EUR',
    intent: 'capture',
    disableFunding: 'card',
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        disabled={disabled}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
        onCancel={onCancel}
      />
    </PayPalScriptProvider>
  );
};

export default ButtonPaymentPaypal;
