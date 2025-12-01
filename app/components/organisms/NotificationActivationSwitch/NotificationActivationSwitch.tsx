import { useNotificationContext } from '~/components/contexts/NotificationContext';
import FieldSwitch from '~/components/molecules/FieldSwitch';

import type { NotificationActivationSwitchProps } from './NotificationActivationSwitch.types';

const NotificationActivationSwitch = ({
  id,
}: NotificationActivationSwitchProps) => {
  const { isSubscribed, setSubscribed } = useNotificationContext();
  const adjective = isSubscribed ? 'enabled' : 'disabled';
  const label = `Notifications ${adjective} on my browser`;
  return (
    <FieldSwitch
      id={id}
      label={label}
      value={isSubscribed}
      onChange={setSubscribed}
    />
  );
};

export default NotificationActivationSwitch;
