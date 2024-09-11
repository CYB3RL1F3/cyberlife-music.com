import FormCheckout from '~/components/organisms/FormCheckout/FormCheckout';
import type { FormCheckoutContainerProps } from './FormCheckoutContainer.types';
import FormCheckoutFooter from '../FormCheckoutFooter';
import { FormCheckoutProps } from '../FormCheckout/FormCheckout.types';
import { useCart } from '~/hooks/db/useCart';

const FormCheckoutContainer = ({
  onCancel,
  items,
  onSubmit,
  ...props
}: FormCheckoutContainerProps) => {
  const { checkout, setCheckout } = useCart();
  const handleSubmit: FormCheckoutProps['onSubmit'] = async (values) => {
    await setCheckout(values);
    onSubmit?.(values);
  };

  return (
    <FormCheckout
      items={items}
      onSubmit={handleSubmit}
      defaultValues={checkout}
      {...props}
      footer={(state, values, reset) => (
        <FormCheckoutFooter
          state={state}
          values={values}
          reset={reset}
          items={items}
          onCancel={onCancel}
        />
      )}
    />
  );
};

export default FormCheckoutContainer;
