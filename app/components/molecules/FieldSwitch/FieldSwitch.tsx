import Switch from "~/components/atoms/Switch";
import type { FieldSwitchProps } from "./FieldSwitch.types";
import Text from "~/components/atoms/Text";

const FieldSwitch = ({ label, ...props }: FieldSwitchProps) => {
  return (
    <div className="flex items-center h-8 gap-2">
      <Switch {...props} />
      <Text.Semibold>{label}</Text.Semibold>
    </div>
  );
};

export default FieldSwitch;
