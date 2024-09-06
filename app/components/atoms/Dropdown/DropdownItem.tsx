import { DropdownItemProps } from "./Dropdown.types";
import Action from "~/components/atoms/Action";
import { twMerge } from "tailwind-merge";
import { useInputStyle } from "~/hooks/useInputStyle";

const DropdownItem = <T,>({
  children,
  value,
  onSelect,
  className: customClassName,
  disabled
}: DropdownItemProps<T>) => {
  const handleClick = () => {
    onSelect?.(value);
  };

  const { className } = useInputStyle(
    false,
    customClassName
  );

  const style = twMerge(
    "flex items-center select-none justify-between px-4 py-2 bg-gray-800 hover:bg-gray-600 border-none whitespace-nowrap min-w-full w-fit text-left pointer-events-auto",
    className
  );

  return (
    <Action disabled={disabled} className={style} onClick={handleClick}>
      {children}
    </Action>
  );
};

export default DropdownItem;
