import type { LinkNavItemContainerProps } from './LinkNavItemContainer.types';
import type { MutableRefObject } from 'react';
import { useRef, useEffect, useCallback } from 'react';
import { useNavContext } from '~/components/contexts/NavContext';
import LinkNavItem from '~/components/atoms/LinkNavItem';
import { debounce } from '~/utils/debounce';
import { useResize } from '~/hooks/misc/useResize';

const LinkNavItemContainer = ({
  index,
  onChange,
  ...props
}: LinkNavItemContainerProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const { setItem, offset } = useNavContext();
  const width = ref.current?.clientWidth;

  const position = (ref.current?.offsetLeft || 0) - (offset || 0);

  const handleUpdateItem = useCallback(() => {
    if (
      typeof width !== 'undefined' &&
      typeof index !== 'undefined' &&
      typeof position !== 'undefined'
    ) {
      setItem({
        index,
        position,
        width,
      });
    }
  }, [setItem, index, position, width]);

  useResize(debounce(handleUpdateItem, 100));

  useEffect(() => {
    handleUpdateItem();
  }, [index, position, width]);

  return <LinkNavItem onChange={onChange} ref={ref} {...props} />;
};

export default LinkNavItemContainer;
