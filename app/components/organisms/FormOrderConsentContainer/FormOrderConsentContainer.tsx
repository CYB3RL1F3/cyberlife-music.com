import { useCart } from '~/hooks/db/useCart';
import type { FormOrderConsentContainerProps } from './FormOrderConsentContainer.types';
import { toast } from 'react-toastify';
import { FormOrderConsentProps } from '~/components/organisms/FormOrderConsent/FormOrderConsent.types';
import FormOrderConsent from '~/components/organisms/FormOrderConsent';

const FormOrderConsentContainer = ({
  onSubmit,
  ...props
}: FormOrderConsentContainerProps) => {
  const { consentCart, items } = useCart();

  const handleSubmit: FormOrderConsentProps['onSubmit'] = async (values) => {
    try {
      if (values.consent && values.confirm) {
        await consentCart();
        onSubmit?.(values);
      } else {
        toast.error('Please confirm your consent');
      }
    } catch (e) {
      toast.error('An error occurred. Please try again.');
    }
  };
  return <FormOrderConsent {...props} items={items} onSubmit={handleSubmit} />;
};

export default FormOrderConsentContainer;
