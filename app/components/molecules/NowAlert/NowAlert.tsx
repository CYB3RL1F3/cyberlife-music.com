import { cn } from '~/utils/cn';
import type { NowAlertProps } from './NowAlert.types';

import { motion } from 'framer-motion';

const NowAlert = ({ className }: NowAlertProps) => {
  return (
    <motion.div
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, repeat: Infinity, repeatType: 'reverse' }}
      className={cn('w-12 md:w-16 h-6 md:h-12', className)}
    >
      <p className="w-12 text-xs text-center text-white bg-green-700 rounded-sm md:text-sm md:w-16 bg-opacity-80">
        NOW
      </p>
    </motion.div>
  );
};

export default NowAlert;
