import { Children } from "react";
import type { ListProps } from "./List.types";
import ListItem from "~/components/molecules/ListItem";

const List = ({ children }: ListProps) => {
  const childList = Children.toArray(children);
  return (
    <ul className="flex flex-col justify-end">
      {childList.map((child, index) => (
        <ListItem key={index} index={index}>
          {child}
        </ListItem>
      ))}
    </ul>
  );
};

export default List;
