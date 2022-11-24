import type { LinkIconProps } from "./LinkIcon.types";

const LinkIcon = ({ url, icon }: LinkIconProps) => {
  return (
    <a
      href={url}
      target="_blank"
      className="flex items-center justify-end w-12 h-12 text-white transition-opacity cursor-pointer text-md duration-50 opacity-70 hover:opacity-90"
      rel="noreferrer"
    >
      {icon}
    </a>
  );
};

export default LinkIcon;
