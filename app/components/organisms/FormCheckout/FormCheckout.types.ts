import type { Infer } from "superstruct";
import type { DefaultValues, FormState, SubmitHandler } from "react-hook-form";
import type { formCheckoutSchema } from "./FormCheckout.schema";
import type { CartItem } from "~/hooks/db/useCart";
import type { ReactNode } from "react";

export type FormCheckoutValues = Infer<typeof formCheckoutSchema>;

export type FormCheckoutProps = {
  items: CartItem[];
  defaultValues?: DefaultValues<FormCheckoutValues>;
  onSubmit: SubmitHandler<FormCheckoutValues>;
  footer?: (props: FormState<FormCheckoutValues>, values: FormCheckoutValues, reset: () => void) => ReactNode;
};
