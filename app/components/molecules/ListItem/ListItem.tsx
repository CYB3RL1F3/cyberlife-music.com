import type { ListItemProps } from "./ListItem.types";
import { useMemo } from "react";

const ListItem = ({ children, index }: ListItemProps) => {
  const delay = useMemo(() => 25 * index + 50, [index]);
  const opacityDelay = useMemo(() => 25 + delay, [delay]);
  return (
    <li
      className="flex justify-end translate-x-[500px] animate-appear border-b border-gray-400"
      style={{
        animationDelay: `${delay}ms`
      }}
    >
      <div
        className="animate-opacity w-full flex flex-end justify-end"
        style={{
          animationDelay: `${opacityDelay}ms`
        }}
      >
        {children}
      </div>
    </li>
  );
};

export default ListItem;
