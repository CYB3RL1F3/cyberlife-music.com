import type { TagProps } from "./Tag.types";

const Tag = ({ value }: TagProps) => {
  return (
    <span className="block p-1 text-sm text-gray-300 bg-gray-600 rounded whitespace-nowrap">
      #{value}
    </span>
  );
};

export default Tag;
