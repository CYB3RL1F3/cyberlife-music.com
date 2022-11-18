import type { LinkNavItemContainerProps } from "./LinkNavItemContainer.types";
import type { MutableRefObject } from "react";
import { useRef, useEffect } from "react";
import { useNavContext } from "~/components/contexts/NavContext";
import LinkNavItem from "~/components/atoms/LinkNavItem";

const LinkNavItemContainer = ({
  index,
  onChange,
  ...props
}: LinkNavItemContainerProps) => {
  const ref =
    useRef<HTMLAnchorElement>() as MutableRefObject<HTMLAnchorElement | null>;
  const { setItem, offset } = useNavContext();
  const width = ref.current?.clientWidth;

  console.log("OFFSET >> ", offset);
  console.log("CURRENT OFFSET LEFT >>> ", ref.current?.offsetLeft);

  const position = (ref.current?.offsetLeft || 0) - (offset || 0);

  useEffect(() => {
    if (
      typeof width !== "undefined" &&
      typeof index !== "undefined" &&
      typeof position !== "undefined" &&
      window.document
    ) {
      window.document.fonts.ready.then(() => {
        setItem({
          index,
          position,
          width
        });
      });
      setItem({
        index,
        position,
        width
      });
    }
  }, [width, setItem, index, position]);
  return <LinkNavItem onChange={onChange} ref={ref} {...props} />;
};

export default LinkNavItemContainer;
