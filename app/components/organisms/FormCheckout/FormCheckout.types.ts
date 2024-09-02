import type { Infer } from "superstruct";
import type { DefaultValues, SubmitHandler } from "react-hook-form";
import type { formCheckoutSchema } from "./FormCheckout.schema";
import type { CartItem } from "~/components/contexts/CartContext/CartContext.types";

export type FormCheckoutValues = Infer<typeof formCheckoutSchema>;

export type FormCheckoutProps = {
  items: CartItem[];
  defaultValues?: DefaultValues<FormCheckoutValues>;
  onSubmit: SubmitHandler<FormCheckoutValues>;
};
