import AutoComplete from '~/components/atoms/AutoComplete';
import AutoCompleteItem from '~/components/atoms/AutoCompleteItem';
import ClientOnly from '~/components/atoms/ClientOnly';
import FieldInput from '~/components/molecules/FieldInput';
import { useToggleState } from '~/hooks/misc/useToggleState';
import type { FieldInputAutoCompleteProps } from './FieldInputAutoComplete.types';
import { forwardRef } from 'react';

const FieldInputAutoComplete = forwardRef<
  HTMLInputElement,
  FieldInputAutoCompleteProps
>(({ size, values, value, onChange, ...props }, ref) => {
  const filteredValues = values.filter(
    (item) =>
      value &&
      value !== item &&
      item.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
  );
  const [disabled, disable, enable] = useToggleState();

  console.log('DISABLED:', disabled);

  return (
    <div className={size}>
      <FieldInput
        value={value}
        onChange={onChange}
        onFocus={enable}
        onUnfocus={() => {
          setTimeout(() => {
            disable();
          }, 100);
        }}
        ref={ref}
        {...props}
        autoComplete="off"
      />
      <ClientOnly>
        {() => (
          <AutoComplete
            values={filteredValues}
            size={size}
            disabled={disabled}
            onSelect={onChange}
            autoCompleteItem={(props) => (
              <AutoCompleteItem key={props.value} {...props} />
            )}
          />
        )}
      </ClientOnly>
    </div>
  );
});

FieldInputAutoComplete.displayName = 'FieldInputAutoComplete';

export default FieldInputAutoComplete;
