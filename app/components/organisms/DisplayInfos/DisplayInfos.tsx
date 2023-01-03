import type { DisplayInfosProps } from "./DisplayInfos.types";
import { AnimatePresence, motion } from "framer-motion";

const DisplayInfos = ({ infos }: DisplayInfosProps) => {
  if (!infos.bio?.content) return null;

  return (
    <AnimatePresence>
      <motion.article
        initial={{ filter: "blur(10px)", x: "5vw", opacity: 0.1 }}
        animate={{ filter: "blur(0)", x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4, ease: "easeInOut" }}
        className="hidden mr-6 md:block"
      >
        <p className={"font-semibold text-xs lg:text-sm leading-4 text-right "}>
          {infos.bio?.content}
        </p>
      </motion.article>
    </AnimatePresence>
  );
};

export default DisplayInfos;
