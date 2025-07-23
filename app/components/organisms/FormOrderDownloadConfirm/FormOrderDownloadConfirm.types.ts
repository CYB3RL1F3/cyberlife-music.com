import { Infer } from 'superstruct';
import { formOrderDownloadConfirmSchema } from './FormOrderDownloadConfirm.schema';
import { ReactNode } from 'react';

export type FormOrderDownloadConfirmValues = Infer<
  typeof formOrderDownloadConfirmSchema
>;

export type FormOrderDownloadConfirmProps = {
  defaultValues?: FormOrderDownloadConfirmValues;
  footer: () => ReactNode;
  onSubmit: (values: FormOrderDownloadConfirmValues) => void;
};
