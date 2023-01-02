import { HiArrowLeft } from "react-icons/hi";
import Heading from "~/components/atoms/Heading";
import type { PageDetailHeaderProps } from "./PageDetailHeader.types";
import { Link } from "@remix-run/react";
import { useFluidTransition } from "~/hooks/useFluidTransition";
import { motion } from "framer-motion";

const PageDetailHeader = ({ title, url }: PageDetailHeaderProps) => {
  const transition = useFluidTransition({
    initial: {
      y: 0,
      opacity: 0
    }
  });
  return (
    <motion.div
      {...transition(0.25)}
      className="z-20 flex justify-between w-full h-16 pt-4 pr-6 max-md:absolute"
    >
      {url && (
        <Link
          to={url}
          className="flex items-center justify-center w-4 h-5 text-lg font-semibold text-white cursor-pointer md:h-6 md:text-md md:w-16"
        >
          <HiArrowLeft />
        </Link>
      )}
      <Heading>{title}</Heading>
    </motion.div>
  );
};

export default PageDetailHeader;
