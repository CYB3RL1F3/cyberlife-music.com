import type { MutableRefObject } from 'react';
import { useRef, useEffect } from 'react';
import NavIndicator from '~/components/atoms/NavIndicator';
import { useNavContext } from '~/components/contexts/NavContext';
import { debounce } from '~/utils/debounce';

const NavIndicatorContainer = () => {
  const { currentIndex, items, setOffset } = useNavContext();
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

  return (
    <div ref={ref} className="hidden w-full h-1 md:flex">
      {!currentItem ? null : (
        <NavIndicator width={currentItem.width} left={currentItem.position} />
      )}
    </div>
  );
};

export default NavIndicatorContainer;
