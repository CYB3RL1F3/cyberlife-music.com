import { useState } from 'react';
import OrderFunnelStep1 from '~/components/organisms/OrderFunnelStep1';
import type { OrderFunnelProps } from './OrderFunnel.types';
import OrderFunnelStep2 from '~/components/organisms/OrderFunnelStep2';
import OrderFunnelEmpty from '~/components/organisms/OrderFunnelEmpty';
import OrderFunnelStep3 from '~/components/organisms/OrderFunnelStep3';
import OrderFunnelSuccess from '~/components/organisms/OrderFunnelSuccess';
import { useNavigate } from '@remix-run/react';

const OrderFunnel = ({ items, defaultStep = 0 }: OrderFunnelProps) => {
  const [step, setStep] = useState(defaultStep);
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/podcasts', { replace: true });
  };

  const CONFIRM = 0;
  const SHIPPING = 1;
  const PAYMENT = 2;
  const SUCCESS = 3;

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
    case PAYMENT:
      return <OrderFunnelStep3 onCancel={prevStep} onSuccess={nextStep} />;
    case SUCCESS:
      return <OrderFunnelSuccess onClose={goToHomePage} />;
    default:
      return null;
  }
};

export default OrderFunnel;
