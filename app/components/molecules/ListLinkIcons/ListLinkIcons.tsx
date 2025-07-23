import LinkIcon from '~/components/atoms/LinkIcon/LinkIcon';
import type { ListLinkIconsProps } from './ListLinkIcons.types';

const ListLinkIcons = ({ linkIcons }: ListLinkIconsProps) => {
  return (
    <div className="flex items-center justify-end h-6 gap-2">
      {linkIcons.map((iconLink) => (
        <LinkIcon key={iconLink.id} {...iconLink} />
      ))}
    </div>
  );
};

export default ListLinkIcons;
