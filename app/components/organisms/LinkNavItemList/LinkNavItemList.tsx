import LinkNavItemContainer from '~/components/molecules/LinkNavItemContainer';
import type { LinkNavItemListProps } from './LinkNavItemList.types';
import clsx from 'clsx';
import InlineListItem from '~/components/atoms/InlineListItem';

const LinkNavItemList = ({ items, onChange, extra }: LinkNavItemListProps) => {
  return (
    <ul className="flex flex-col p-0 m-0 md:flex-row md:flex-end">
      {items.map((item, index) => (
        <InlineListItem
          index={index}
          key={`menuItem__${item.href}`}
          className={clsx(
            "list-none max-md:before:content-[''] max-md:before:w-0 text-right w-full md:w-auto md:text-left h-24 md:h-8 flex justify-end md:justify-start items-center uppercase text-lg font-semibold",
          )}
        >
          <LinkNavItemContainer {...item} onChange={onChange} index={index} />
        </InlineListItem>
      ))}
      {extra && (
        <InlineListItem
          index={items.length}
          className={clsx(
            "list-none max-md:before:content-[''] max-md:before:w-0 text-right w-full md:w-auto md:text-left h-24 md:h-8 flex justify-end md:justify-start items-center uppercase text-lg font-semibold",
          )}
        >
          {extra}
        </InlineListItem>
      )}
    </ul>
  );
};

export default LinkNavItemList;
