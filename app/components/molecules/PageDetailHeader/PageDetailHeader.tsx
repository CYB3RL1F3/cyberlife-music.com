import { HiArrowLeft } from "react-icons/hi";
import Title from "~/components/atoms/Title/Title";
import type { PageDetailHeaderProps } from "./PageDetailHeader.types";
import { Link } from "@remix-run/react";

const PageDetailHeader = ({ title, url }: PageDetailHeaderProps) => {
  return (
    <div className="z-10 flex justify-between w-full h-16 pt-4 pr-6 max-md:absolute">
      {url && (
        <Link
          to={url}
          className="flex items-center justify-center w-4 h-8 text-lg font-semibold text-white cursor-pointer md:text-md md:w-16 md:ml-40"
        >
          <HiArrowLeft />
        </Link>
      )}
      <Title align="right">{title}</Title>
    </div>
  );
};

export default PageDetailHeader;
