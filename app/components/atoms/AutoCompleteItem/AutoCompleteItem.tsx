import clsx from "clsx";
import type { AutoCompleteItemProps } from "./AutoCompleteItem.types";

const AutoCompleteItem = ({
  value,
  isHover,
  onClick
}: AutoCompleteItemProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "w-full h-8 p-2 text-xs border-none outline-none transition-all duration-25",
        {
          " text-gray-200 hover:bg-gray-800 hover:text-gray-400 bg-gray-600":
            !isHover,
          " text-gray-400 bg-gray-800 text-bold": isHover
        }
      )}
    >
      {value}
    </button>
  );
};

export default AutoCompleteItem;
