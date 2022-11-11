import type { DefaultValues, SubmitHandler } from "react-hook-form";
import type { Infer } from "superstruct";
import type { formContactSchema } from "./FormContact.schema";

export type FormContactValues = Infer<typeof formContactSchema>;

export type FormContactProps = {
  subjectSuggestions: string[];
  defaultValues?: DefaultValues<FormContactValues>;
  onSubmit: SubmitHandler<FormContactValues>;
};
