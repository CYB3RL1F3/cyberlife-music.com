import FormCheckout from '~/components/organisms/FormCheckout/FormCheckout';
import type { FormCheckoutContainerProps } from './FormCheckoutContainer.types';
import FormCheckoutFooter from '../FormCheckoutFooter';
import { FormCheckoutProps } from '../FormCheckout/FormCheckout.types';

const FormCheckoutContainer = ({
  onCancel,
  items,
  onSubmit,
  ...props
}: FormCheckoutContainerProps) => {
  const handleSubmit: FormCheckoutProps['onSubmit'] = (values) => {
    console.log('submit', values);
    onSubmit?.(values);
  };

  return (
    <FormCheckout
      items={items}
      onSubmit={handleSubmit}
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
