import AutoComplete from "~/components/atoms/AutoComplete";
import AutoCompleteItem from "~/components/atoms/AutoCompleteItem";
import ClientOnly from "~/components/atoms/ClientOnly";
import FieldInput from "~/components/molecules/FieldInput";
import { useToggleState } from "~/hooks/useToggleState";
import type { FieldInputAutoCompleteProps } from "./FieldInputAutoComplete.types";

const FieldInputAutoComplete = ({
  size,
  values,
  value,
  onChange,
  ...props
}: FieldInputAutoCompleteProps) => {
  const filteredValues = values.filter(
    (item) => value && value !== item && item.includes(value)
  );
  const [disabled, disable, enable] = useToggleState();

  return (
    <ClientOnly>
      {() => (
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
            {...props}
            autoComplete="off"
          />
          <AutoComplete
            values={filteredValues}
            size={size}
            disabled={disabled}
            onSelect={onChange}
            autoCompleteItem={(xx) => <AutoCompleteItem {...xx} />}
          />
        </div>
      )}
    </ClientOnly>
  );
};

export default FieldInputAutoComplete;
