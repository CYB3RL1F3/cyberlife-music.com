import type { ListItemWrapperProps } from "./ListItemWrapper.types";
import { useMemo } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const ListItemWrapper = ({ children, index }: ListItemWrapperProps) => {
  const delay = useMemo(() => {
    const i = index > 10 ? 10 : index;
    return 0.025 * i + 0.05;
  }, [index]);
  const opacityDelay = useMemo(() => 0.05 + delay, [delay]);

  const className = clsx("flex justify-end border-gray-gray-400", {
    "border-t pt-4": index > 0
  });
  return (
    <motion.li
      className={className}
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{ duration: 0.3, delay }}
    >
      <motion.div
        className="flex justify-end w-full flex-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, delay: opacityDelay }}
      >
        {children}
      </motion.div>
    </motion.li>
  );
};

export default ListItemWrapper;
