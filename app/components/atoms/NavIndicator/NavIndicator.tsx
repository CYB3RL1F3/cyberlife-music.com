import type { NavIndicatorProps } from "./NavIndicator.types";

const NavIndicator = ({ width, left }: NavIndicatorProps) => {
  return (
    <span
      style={{
        transform: `translateX(${left}px)`,
        width: `${width}px`
      }}
      className={`block transition-all ease-in-out translate-x-[${left}px] w-[${width}px] h-1 bg-lightGray`}
    />
  );
};

export default NavIndicator;
