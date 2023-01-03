import Switch from "~/components/atoms/Switch";
import type { FieldSwitchProps } from "./FieldSwitch.types";

const FieldSwitch = ({ label, id, ...props }: FieldSwitchProps) => {
  return (
    <div className="flex items-center h-8 gap-2">
      <Switch id={id} {...props} />
      <label
        htmlFor={id}
        className="pr-2 m-0 text-sm font-semibold leading-6 text-left text-gray-400 cursor-pointer md:hover:text-white md:text-md normal p-O"
      >
        {label}
      </label>
    </div>
  );
};

export default FieldSwitch;
