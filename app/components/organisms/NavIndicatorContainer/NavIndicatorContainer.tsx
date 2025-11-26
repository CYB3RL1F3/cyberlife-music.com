import { useLocation } from '@remix-run/react';
import { useRef, useEffect } from 'react';
import NavIndicator from '~/components/atoms/NavIndicator';
import { debounce } from '~/utils/debounce';
import { NavIndicatorContainerProps } from './NavIndicatorContainer.types';
import { useNavStore } from '~/hooks/stores/nav/useNavStore';
import { getCurrentRouteIndex } from '~/utils/nav';

const NavIndicatorContainer = ({ routes }: NavIndicatorContainerProps) => {
  const { currentIndex, items, setOffset, setIndex } = useNavStore();
  const currentItem = items[currentIndex];
  const ref = useRef<HTMLDivElement>(null);

  const update = debounce(() => {
    const offset = ref.current?.offsetLeft;
    if (offset) {
      setOffset(offset);
    }
  }, 200);

  useEffect(() => {
    setTimeout(update, 300);
  }, [setOffset, update]);

  const { pathname } = useLocation();

  useEffect(() => {
    const index = getCurrentRouteIndex(routes, pathname);
    setIndex(index);
  }, [pathname, routes]);

  return (
    <div ref={ref} className="hidden w-full h-1 md:flex">
      {!currentItem ? null : (
        <NavIndicator width={currentItem.width} left={currentItem.position} />
      )}
    </div>
  );
};

export default NavIndicatorContainer;
