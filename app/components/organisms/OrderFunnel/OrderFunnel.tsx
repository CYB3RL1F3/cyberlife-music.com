import { useState } from 'react';
import OrderFunnelStep1 from '~/components/organisms/OrderFunnelStep1';
import type { OrderFunnelProps } from './OrderFunnel.types';
import OrderFunnelStep2 from '~/components/organisms/OrderFunnelStep2';
import OrderFunnelEmpty from '../OrderFunnelEmpty';

const OrderFunnel = ({ items, defaultStep = 0 }: OrderFunnelProps) => {
  console.log('PASS ==> ', defaultStep, items);
  const [step, setStep] = useState(defaultStep);
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const CONFIRM = 0;
  const SHIPPING = 1;
  const PAYMENT = 2;

  if (!items.length) {
    return <OrderFunnelEmpty />;
  }

  switch (step) {
    case CONFIRM:
      return <OrderFunnelStep1 items={items} onSubmit={nextStep} />;
    case SHIPPING:
      return (
        <OrderFunnelStep2
          items={items}
          onSubmit={nextStep}
          onCancel={prevStep}
        />
      );
    default:
      return null;
  }
};

export default OrderFunnel;
