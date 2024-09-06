import DropdownItem from './DropdownItem';
import { DropdownItemsProps } from './Dropdown.types';

const DropdownItems = <T,>({
  items,
  value,
  onChange,
  isSelected = (item, value) => item === value,
  itemToKey = (item) =>
    typeof item === 'string' ? item : Math.random().toString(16),
  render,
}: DropdownItemsProps<T>) => {
  console.log('items ==> ', items);
  return (
    <ul className="min-w-full rounded-lg shadow-lg pointer-events-none">
      {items.map((item, index) => (
        <li key={itemToKey(item)}>
          <DropdownItem
            value={item}
            onSelect={(value) => {
              onChange?.(value, index);
            }}
          >
            {render(item, isSelected(item, value), value, index)}
          </DropdownItem>
        </li>
      ))}
    </ul>
  );
};

export default DropdownItems;
