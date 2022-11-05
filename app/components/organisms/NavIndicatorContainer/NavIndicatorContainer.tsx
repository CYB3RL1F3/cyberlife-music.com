import type { MutableRefObject } from "react";
import { useRef } from "react";
import NavIndicator from "~/components/atoms/NavIndicator";
import { useNavContext } from "~/components/contexts/Nav";

const NavIndicatorContainer = () => {
  const { currentIndex, items } = useNavContext();
  console.log(
    "CURRENT INDEX >>> ",
    currentIndex,
    "ITEM >>>",
    items[currentIndex]
  );
  const currentItem = items[currentIndex];
  const ref =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement | null>;
  console.log("REF > ", ref.current, currentItem);
  return (
    <div ref={ref} className="flex w-full h-1">
      {!currentItem ? null : (
        <NavIndicator width={currentItem.width} left={currentItem.position} />
      )}
    </div>
  );
};

export default NavIndicatorContainer;
