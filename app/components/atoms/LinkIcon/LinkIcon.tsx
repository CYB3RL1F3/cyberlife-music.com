import type { LinkIconProps } from "./LinkIcon.types";

const LinkIcon = ({ url, title, icon }: LinkIconProps) => {
  const className =
    "flex items-center justify-end w-8 h-6 text-lg text-white transition-opacity cursor-pointer linkIcon duration-50 opacity-70 hover:opacity-90";
  return url ? (
    <a
      title={title}
      href={url}
      target="_blank"
      className={className}
      rel="noreferrer"
    >
      {icon}
    </a>
  ) : (
    <span className={className}>{icon}</span>
  );
};

export default LinkIcon;
