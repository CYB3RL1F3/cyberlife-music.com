import Checkbox from '~/components/atoms/Checkbox';
import FieldWrapper from '~/components/molecules/FieldWrapper';

import type { FieldCheckboxProps } from './FieldCheckbox.types';

const FieldCheckbox = ({ label, id, error, ...props }: FieldCheckboxProps) => {
  return (
    <FieldWrapper error={error}>
      <div className="flex items-start h-8 gap-4">
        <Checkbox className="mt-1" id={id} {...props} />
        <label
          htmlFor={id}
          className="pr-2 m-0 text-sm leading-6 text-left text-gray-400 cursor-pointer md:hover:text-white md:text-md normal p-O"
        >
          {label}
        </label>
      </div>
    </FieldWrapper>
  );
};

export default FieldCheckbox;
