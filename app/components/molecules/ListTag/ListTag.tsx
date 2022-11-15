import Tag from "~/components/atoms/Tag";
import type { ListTagProps } from "./ListTag.types";

const ListTag = ({ tags }: ListTagProps) => {
  return (
    <ul className="flex flex-wrap gap-1">
      {tags.map(
        (tag) =>
          tag && (
            <li className="p-0 m-0 list-none" key={tag}>
              <Tag value={tag} />
            </li>
          )
      )}
    </ul>
  );
};

export default ListTag;
