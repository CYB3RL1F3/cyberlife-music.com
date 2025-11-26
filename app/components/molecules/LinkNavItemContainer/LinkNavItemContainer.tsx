import type { LinkNavItemContainerProps } from './LinkNavItemContainer.types';
import { useRef, useEffect, useCallback } from 'react';
import LinkNavItem from '~/components/atoms/LinkNavItem';
import { debounce } from '~/utils/debounce';
import { useResize } from '~/hooks/misc/useResize';
import { useNavStore } from '~/hooks/stores/nav/useNavStore';

const LinkNavItemContainer = ({
  index,
  onChange,
  ...props
}: LinkNavItemContainerProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const { setItem, offset } = useNavStore();
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
