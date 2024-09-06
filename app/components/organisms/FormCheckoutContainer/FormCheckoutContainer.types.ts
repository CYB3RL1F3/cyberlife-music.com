import { FormCheckoutProps } from "../FormCheckout/FormCheckout.types";

  export type FormCheckoutContainerProps = Pick<FormCheckoutProps, "onSubmit" | "items"> & {
    onCancel?: () => void;
  }