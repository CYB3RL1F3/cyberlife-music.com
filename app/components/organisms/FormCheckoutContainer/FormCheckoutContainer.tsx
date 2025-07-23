import FormCheckout from '~/components/organisms/FormCheckout/FormCheckout';
import type { FormCheckoutContainerProps } from './FormCheckoutContainer.types';
import FormCheckoutFooter from '../FormCheckoutFooter';
import { FormCheckoutProps } from '../FormCheckout/FormCheckout.types';
import { useCart } from '~/hooks/db/useCart';
import Loader from '~/components/molecules/Loader';

const FormCheckoutContainer = ({
  onCancel,
  items,
  onSubmit,
  ...props
}: FormCheckoutContainerProps) => {
  const { checkout, setCheckout, loaded } = useCart();

  const handleSubmit: FormCheckoutProps['onSubmit'] = async (values) => {
    await setCheckout(values);
    onSubmit?.(values);
  };

  if (!loaded) {
    return <Loader message="Please wait while we're loading your cart..." />;
  }

  return (
    <FormCheckout
      items={items}
      onSubmit={handleSubmit}
      {...props}
      defaultValues={checkout}
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
