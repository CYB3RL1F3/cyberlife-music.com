import { useFluidTransition } from '~/hooks/misc/useFluidTransition';
import type { FormHeadingProps } from './FormHeading.types';

import { motion } from 'framer-motion';

const FormHeading = ({ title, description }: FormHeadingProps) => {
  const transition = useFluidTransition();

  return (
    <motion.div {...transition(0)} className="w-full h-28">
      <h1 className="mt-2 text-lg italic text-right">{title}</h1>
      <p className="italic text-right text-gray-400 text-md">{description}</p>
    </motion.div>
  );
};

export default FormHeading;
