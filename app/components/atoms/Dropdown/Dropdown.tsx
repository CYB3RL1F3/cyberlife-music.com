import { useMemo, useState } from 'react';
import DropdownItems from './DropdownItems';
import DropdownWrapper from './DropdownWrapper';
import { DropdownItemsProps, DropdownProps } from './Dropdown.types';
import DropdownItem from './DropdownItem';
import DropdownButton from './DropdownButton';
import Input from '../Input';

const Dropdown = <T,>({
  label,
  dropdownButton,
  items,
  itemToKey,
  render,
  onChange,
  closeOnSelect = true,
  position = 'bottom',
  filterable,
  disabled,
  useFilter,
  filterPlaceholder,
  ...props
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleChange: DropdownItemsProps<T>['onChange'] = (item, index) => {
    closeOnSelect && setIsOpen(false);
    onChange?.(item, index);
  };

  const [filteredItems, setFilteredItems] = useState(items);

  const handleFilter = (value: string) => {
    if (!filterable || !useFilter) {
      return;
    }
    setFilteredItems(useFilter(value));
  };

  console.log('FILTERED ITEMS ==> ', filteredItems, items);

  const extra = useMemo(
    () =>
      filterable && useFilter ? (
        <div className="relative flex items-center justify-center w-full h-12 px-2 mt-2">
          <Input
            placeholder={filterPlaceholder}
            className="w-full text-white bg-gray-600 bg-opacity-50 placeholder-slate-400"
            onChange={handleFilter}
          />
        </div>
      ) : null,
    [filterable, useFilter, filterPlaceholder],
  );

  return (
    <Dropdown.Wrapper
      isOpen={isOpen}
      onToggle={toggleDropdown}
      label={label}
      disabled={disabled}
      position={position}
      dropdownButton={dropdownButton}
      extra={extra}
    >
      <Dropdown.Items
        itemToKey={itemToKey}
        items={filterable && useFilter ? filteredItems : items}
        render={render}
        onChange={handleChange}
        {...props}
      />
    </Dropdown.Wrapper>
  );
};

Dropdown.Items = DropdownItems;
Dropdown.Item = DropdownItem;
Dropdown.Wrapper = DropdownWrapper;
Dropdown.Button = DropdownButton;

export default Dropdown;
