import { HiArrowLeft } from "react-icons/hi";
import Title from "~/components/atoms/Title/Title";
import type { PageDetailHeaderProps } from "./PageDetailHeader.types";
import { Link } from "@remix-run/react";

const PageDetailHeader = ({ title, url }: PageDetailHeaderProps) => {
  return (
    <div className="flex justify-between w-full h-8 pt-4 pr-6">
      {url && (
        <Link
          to={url}
          className="flex items-center justify-center w-16 h-8 ml-40 font-semibold text-white cursor-pointer"
        >
          <HiArrowLeft />
        </Link>
      )}
      <Title align="right">{title}</Title>
    </div>
  );
};

export default PageDetailHeader;
