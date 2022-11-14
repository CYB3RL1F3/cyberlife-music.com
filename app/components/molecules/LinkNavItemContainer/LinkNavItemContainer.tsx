import type { LinkNavItemContainerProps } from "./LinkNavItemContainer.types";
import type { MutableRefObject } from "react";
import { useRef, useMemo, useEffect } from "react";
import { useNavContext } from "~/components/contexts/NavContext";
import LinkNavItem from "~/components/atoms/LinkNavItem";

const LinkNavItemContainer = ({
  index,
  ...props
}: LinkNavItemContainerProps) => {
  const ref =
    useRef<HTMLAnchorElement>() as MutableRefObject<HTMLAnchorElement | null>;
  const { setItem, offset } = useNavContext();
  console.log(offset);
  const width = ref.current?.clientWidth;

  const position = useMemo(
    () => (ref.current?.offsetLeft || 0) - (offset || 0),
    [offset]
  );

  useEffect(() => {
    if (
      typeof width !== "undefined" &&
      typeof index !== "undefined" &&
      typeof position !== "undefined"
    ) {
      setTimeout(() => {
        setItem({
          index,
          position,
          width
        });
      }, 100);
    }
  }, [width, setItem, index, position]);
  return <LinkNavItem ref={ref} {...props} />;
};

export default LinkNavItemContainer;
