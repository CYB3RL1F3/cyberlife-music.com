import { useNotificationContext } from "~/components/contexts/NotificationContext";
import FieldSwitch from "~/components/molecules/FieldSwitch";

const NotificationActivationSwitch = () => {
  const { isActive, setActive } = useNotificationContext();
  const adjective = isActive ? "enabled" : "disabled";
  const label = `Notifications ${adjective} on my browser`;
  return <FieldSwitch label={label} value={isActive} onChange={setActive} />;
};

export default NotificationActivationSwitch;
