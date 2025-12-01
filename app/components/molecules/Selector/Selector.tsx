import Dropdown, { DropdownProps } from '~/components/atoms/Dropdown';
import Label from '~/components/atoms/Label';

import { Item, SelectorProps } from './Selector.types';

const Selector = <T,>({
  onChange,
  value,
  items,
  label,
  position = 'bottom',
  filterable,
  filterPlaceholder,
  disabled,
  isSelected = (item, value) => item === value,
}: SelectorProps<T>) => {
  const currentValue = items?.find((item) => isSelected(item.value, value));

  const handleChange: DropdownProps<Item<T>>['onChange'] = (item, index) => {
    onChange?.(item.value, index);
  };

  const _label = currentValue?.label ? (
    <Label className="text-gray-400" icon={currentValue.icon}>
      {currentValue.label}
    </Label>
  ) : (
    <Label className="text-gray-400">{label}</Label>
  );

  const useFilter = filterable
    ? (value: string) => {
        return items.filter((item) =>
          item.label.toLowerCase().includes(value.toLowerCase()),
        );
      }
    : undefined;

  return (
    <Dropdown
      label={_label}
      items={items}
      useFilter={useFilter}
      filterable={filterable}
      position={position}
      disabled={disabled}
      value={currentValue}
      render={(item) => <Label icon={item.icon}>{item.label}</Label>}
      itemToKey={(item) => item.id}
      onChange={handleChange}
      filterPlaceholder={filterPlaceholder}
    />
  );
};

export default Selector;
