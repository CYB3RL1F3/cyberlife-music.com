import type { LinkIconProps } from "./LinkIcon.types";

const LinkIcon = ({ url, icon }: LinkIconProps) => {
  return (
    <a
      href={url}
      className="flex justify-end w-12 h-12 text-white transition-opacity cursor-pointer text-md duration-50 opacity-70 hover:opacity-90"
    >
      {icon}
    </a>
  );
};

export default LinkIcon;
