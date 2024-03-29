import type { ListItemProps } from "./ListItem.types";

const ListItem = ({ children, thumbnail }: ListItemProps) => {
  return (
    <div className="flex w-full gap-4">
      <div className="flex flex-auto max-md:w-1/2">{children}</div>
      {thumbnail && <div className="flex">{thumbnail}</div>}
    </div>
  );
};

export default ListItem;
