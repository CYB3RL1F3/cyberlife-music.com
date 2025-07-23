import type { ReactNode } from "react";
import { OrderPaymentProps } from "../OrderPayment/OrderPayment.types";

export type OrderPaymentContainerProps = Pick<OrderPaymentProps, 'onCancel' | 'onSuccess'> & {
  children?: ReactNode;
}
  