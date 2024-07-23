import { Children } from "react";
import type { ListProps } from "./List.types";
import ListItemWrapper from "~/components/molecules/ListItemWrapper";

const List = ({ children, noBorder }: ListProps) => {
  const childList = Children.toArray(children);
  return (
    <ul className="o-4">
      {childList.map((child, index) => (
        <ListItemWrapper
          noBorder={index === 0 || noBorder?.(index)}
          key={index}
          index={index}
        >
          {child}
        </ListItemWrapper>
      ))}
    </ul>
  );
};

export default List;
