import type { MutableRefObject } from "react";
import { useRef, useEffect } from "react";
import NavIndicator from "~/components/atoms/NavIndicator";
import { useNavContext } from "~/components/contexts/NavContext";

const NavIndicatorContainer = () => {
  const { currentIndex, items, setOffset } = useNavContext();
  console.log(
    "CURRENT INDEX >>> ",
    currentIndex,
    "ITEM >>>",
    items[currentIndex]
  );
  const currentItem = items[currentIndex];
  const ref =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement | null>;

  useEffect(() => {
    const offset = ref.current?.offsetLeft;
    console.log("OFFSET >> ", ref.current?.offsetLeft);
    if (offset) setOffset(offset);
  }, [setOffset]);

  return (
    <div ref={ref} className="flex w-full h-1">
      {!currentItem ? null : (
        <NavIndicator width={currentItem.width} left={currentItem.position} />
      )}
    </div>
  );
};

export default NavIndicatorContainer;
