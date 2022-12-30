import type { LinkIconProps } from "./LinkIcon.types";

const LinkIcon = ({ url, icon }: LinkIconProps) => {
  const className =
    "flex items-center justify-end w-12 h-12 text-lg text-white transition-opacity cursor-pointer linkIcon duration-50 opacity-70 hover:opacity-90";
  return url ? (
    <a href={url} target="_blank" className={className} rel="noreferrer">
      {icon}
    </a>
  ) : (
    <span className={className}>{icon}</span>
  );
};

export default LinkIcon;
