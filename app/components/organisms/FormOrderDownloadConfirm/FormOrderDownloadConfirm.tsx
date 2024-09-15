import { useForm } from 'react-hook-form';
import {
  FormOrderDownloadConfirmValues,
  type FormOrderDownloadConfirmProps,
} from './FormOrderDownloadConfirm.types';
import ControlledFieldInput from '../ControlledFieldInput';
import { motion } from 'framer-motion';
import { useFluidTransition } from '~/hooks/useFluidTransition';
import { superstructResolver } from '@hookform/resolvers/superstruct';
import { formOrderDownloadConfirmSchema } from './FormOrderDownloadConfirm.schema';

const FormOrderDownloadConfirm = ({
  defaultValues,
  footer,
  onSubmit,
}: FormOrderDownloadConfirmProps) => {
  const { control, handleSubmit } = useForm<FormOrderDownloadConfirmValues>({
    defaultValues: {
      email: defaultValues?.email || '',
    },
    reValidateMode: 'onChange',
    mode: 'onChange',
    resolver: superstructResolver(formOrderDownloadConfirmSchema),
  });

  const transition = useFluidTransition();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full o-4">
      <h3 className="italic font-bold text-right text-md">
        Please first confirm your email address here
      </h3>
      <motion.div {...transition(0.1)} className="w-full">
        <ControlledFieldInput
          control={control}
          name="email"
          type="email"
          placeholder="Your email"
        />
      </motion.div>
      <motion.div {...transition(0.3)} className="w-full">
        {footer()}
      </motion.div>
    </form>
  );
};

export default FormOrderDownloadConfirm;
