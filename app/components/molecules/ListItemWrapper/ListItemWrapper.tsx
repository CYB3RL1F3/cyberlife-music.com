import type { ListItemWrapperProps } from "./ListItemWrapper.types";
import { useMemo } from "react";
import { motion, useWillChange } from "framer-motion";
import clsx from "clsx";

const ListItemWrapper = ({ children, index }: ListItemWrapperProps) => {
  const delay = useMemo(() => {
    const i = index > 10 ? 10 : index;
    return 0.03 * i + 0.06;
  }, [index]);

  const opacityDelay = useMemo(() => 0.06 + delay, [delay]);

  const className = clsx("flex justify-end border-gray-400", {
    "border-t pt-4": index > 0
  });
  const willChange = useWillChange();

  return (
    <motion.li
      className={className}
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{ duration: 0.3, delay, ease: "easeInOut" }}
      style={{ willChange }}
    >
      <motion.div
        className="flex justify-end w-full flex-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: opacityDelay, ease: "easeInOut" }}
        style={{ willChange }}
      >
        {children}
      </motion.div>
    </motion.li>
  );
};

export default ListItemWrapper;
