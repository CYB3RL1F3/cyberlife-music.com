import { useNotificationContext } from "~/components/contexts/NotificationContext";
import FieldSwitch from "~/components/molecules/FieldSwitch";

const NotificationActivationSwitch = () => {
  const { isSubscribed, setSubscribed } = useNotificationContext();
  const adjective = isSubscribed ? "enabled" : "disabled";
  const label = `Notifications ${adjective} on my browser`;
  return (
    <FieldSwitch
      id="notificationActivtionSwitch"
      label={label}
      value={isSubscribed}
      onChange={setSubscribed}
    />
  );
};

export default NotificationActivationSwitch;
