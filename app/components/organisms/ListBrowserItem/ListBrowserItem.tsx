import { cn } from '~/utils/cn';

import type { ListBrowserItemProps } from './ListBrowserItem.types';

const ListBrowserItem = ({
  title,
  icon,
  href,
  className,
}: ListBrowserItemProps) => {
  if (!icon) return null;
  return (
    <a
      href={href}
      target="_blank"
      className="flex flex-col items-center justify-center gap-5 text-gray-200 capitalize md:hover:text-white"
      rel="noreferrer"
    >
      <img
        src={icon}
        alt={title}
        width={50}
        height={50}
        className={cn('w-[50px] h-[50px]', className)}
      />
      <span className="w-full text-center text-md">{title}</span>
    </a>
  );
};

export default ListBrowserItem;
