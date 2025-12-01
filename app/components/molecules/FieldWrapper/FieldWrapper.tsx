import { motion } from 'framer-motion';

import LabelError from '~/components/atoms/LabelError';

import type { FieldWrapperProps } from './FieldWrapper.types';

const FieldWrapper = ({ children, error }: FieldWrapperProps) => {
  return (
    <motion.div transition={{ duration: 0.3 }} className="flex flex-col w-full">
      {children}
      {!!error && <LabelError>{error}</LabelError>}
    </motion.div>
  );
};

export default FieldWrapper;
