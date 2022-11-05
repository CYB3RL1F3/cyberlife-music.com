import type { NavItemContainerProps } from "./NavItemContainer.types";
import type { MutableRefObject } from "react";
import { useRef, useEffect } from "react";
import { useNavContext } from "~/components/contexts/Nav";
import NavItem from "~/components/atoms/NavItem";

const NavItemContainer = ({ index, ...props }: NavItemContainerProps) => {
  const ref =
    useRef<HTMLAnchorElement>() as MutableRefObject<HTMLAnchorElement | null>;
  const { setItem } = useNavContext();
  const width = ref.current?.clientWidth;
  const position =
    (ref.current?.offsetLeft || 0) -
    (ref.current?.parentElement?.parentElement?.offsetLeft || -1);
  useEffect(() => {
    if (
      typeof width !== "undefined" &&
      typeof index !== "undefined" &&
      typeof position !== "undefined"
    ) {
      setItem({
        index,
        position,
        width
      });
    }
  }, [width, setItem, index, position]);
  return <NavItem ref={ref} {...props} />;
};

export default NavItemContainer;
