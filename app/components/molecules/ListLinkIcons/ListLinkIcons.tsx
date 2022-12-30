import LinkIcon from "~/components/atoms/LinkIcon/LinkIcon";
import type { ListLinkIconsProps } from "./ListLinkIcons.types";

const ListLinkIcons = ({ linkIcons }: ListLinkIconsProps) => {
  return (
    <div className="flex justify-end gap-1">
      {linkIcons.map((iconLink) => (
        <LinkIcon key={iconLink.id} {...iconLink} />
      ))}
    </div>
  );
};

export default ListLinkIcons;
