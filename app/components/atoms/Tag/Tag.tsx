import type { TagProps } from "./Tag.types";

const Tag = ({ value, href }: TagProps) => {
  return (
    <a
      href={href || ""}
      target="_blank"
      className="block px-2 py-1 text-sm text-gray-300 bg-gray-600 rounded hover:bg-gray-500 hover:text-gray-100 whitespace-nowrap"
      rel="noreferrer"
    >
      #{value}
    </a>
  );
};

export default Tag;
