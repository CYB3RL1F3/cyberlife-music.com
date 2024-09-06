import type { Infer } from "superstruct";
import type { DefaultValues, SubmitHandler } from "react-hook-form";
import type { formOrderConsentSchema } from "./FormOrderConsent.schema";
import type { CartItem } from "~/hooks/db/useCart";
import type { ReactNode } from "react";

export type FormOrderConsentValues = Infer<typeof formOrderConsentSchema>;

export type FormOrderConsentProps = {
  children?: ReactNode;
  items: CartItem[];
  defaultValues?: DefaultValues<FormOrderConsentValues>;
  onSubmit: SubmitHandler<FormOrderConsentValues>;
};
