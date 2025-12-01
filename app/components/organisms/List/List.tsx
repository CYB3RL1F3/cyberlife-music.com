import { Children } from 'react';

import ListItemWrapper from '~/components/molecules/ListItemWrapper';

import type { ListProps } from './List.types';

const List = ({ children, noBorder }: ListProps) => {
  const childList = Children.toArray(children);

  return (
    <ul className="o-4">
      {childList.map((child, index) => (
        <ListItemWrapper
          noBorder={index === 0 || noBorder?.(index)}
          key={index}
          index={index}
        >
          {child}
        </ListItemWrapper>
      ))}
    </ul>
  );
};

export default List;
