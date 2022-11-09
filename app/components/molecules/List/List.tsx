import { Children } from "react";
import type { ListProps } from "./List.types";
import ListItemWrapper from "~/components/molecules/ListItemWrapper";

const List = ({ children }: ListProps) => {
  const childList = Children.toArray(children);
  return (
    <ul className="flex flex-col justify-end o-4">
      {childList.map((child, index) => (
        <ListItemWrapper key={index} index={index}>
          {child}
        </ListItemWrapper>
      ))}
    </ul>
  );
};

export default List;
