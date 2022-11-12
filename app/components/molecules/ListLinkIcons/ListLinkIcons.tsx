import LinkIcon from "~/components/atoms/LinkIcon/LinkIcon";
import type { ListLinkIconsProps } from "./ListLinkIcons.types";

const ListLinkIcons = ({ linkIcons }: ListLinkIconsProps) => {
  return (
    <div className="flex justify-end gap-4">
      {linkIcons.map((iconLink) => (
        <LinkIcon key={iconLink.url} {...iconLink} />
      ))}
    </div>
  );
};

export default ListLinkIcons;
