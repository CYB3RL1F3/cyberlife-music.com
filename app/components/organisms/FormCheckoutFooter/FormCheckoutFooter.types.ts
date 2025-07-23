import { CartItem } from "~/hooks/db/useCart";
import { FormCheckoutProps } from "../FormCheckout/FormCheckout.types";
import { NonUndefined } from "react-hook-form";

type FooterType = Parameters<NonUndefined<FormCheckoutProps["footer"]>>
type Reset = FooterType[2]
type Values = FooterType[1]
type State = FooterType[0]

export type FormCheckoutFooterProps = {
  reset: Reset;
  values: Values;
  state: State;
  items: CartItem[];
  onCancel?: () => void;
}
  