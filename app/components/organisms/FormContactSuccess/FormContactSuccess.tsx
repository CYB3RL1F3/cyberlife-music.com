import { motion } from 'framer-motion';

import AnimatedIconCheck from '~/components/atoms/AnimatedIconCheck';
import Button from '~/components/atoms/Button';

import type { FormContactSuccessProps } from './FormContactSuccess.types';

const getAnimation = (i: number) => ({
  initial: { y: -50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: 0.3 + 0.2 * i,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    delay: 0.3 * i,
    transition: {
      duration: 0.25,
      delay: 0.1 * i,
    },
  },
});

const FormContactSuccess = ({ onHide }: FormContactSuccessProps) => {
  return (
    <div className="w-full py-4 o-8">
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center h-24"
      >
        <AnimatedIconCheck />
      </motion.div>
      <motion.div className="w-full" {...getAnimation(1)}>
        <h1 className="w-full text-xl text-center text-gray-100">
          Thanks for getting in touch!
        </h1>
      </motion.div>
      <motion.div className="w-full" {...getAnimation(2)}>
        <p className="w-full px-4 text-center text-md">
          Your message has been <u>successfully sent</u>. You'll get replied as
          soon as possible.
        </p>
      </motion.div>
      <motion.div
        className="flex justify-center w-full h-6"
        {...getAnimation(3)}
      >
        <Button onClick={onHide}>Send another message</Button>
      </motion.div>
    </div>
  );
};

export default FormContactSuccess;
