import { motion } from "framer-motion";
import type { AnimatedWrapperProps } from "./AnimatedWrapper.types";

const AnimatedWrapper = ({
  children,
  className,
  key,
  delay = 0.1
}: AnimatedWrapperProps) => {
  return (
    <motion.div
      className={className}
      key={key}
      initial={{ opacity: 0, y: -25 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
          delay
        }
      }}
      exit={{
        opacity: 0.8,
        y: -5,
        transition: {
          duration: 0.2,
          delay: delay / 2
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
