import { useCallback, useEffect, useState } from "react";
import { useSubscribeMutation } from "~/hooks/mutations/useSubscribeMutation";
import { useConfigContext } from "../ConfigContext";
import { NotificationContext } from "./NotificationContext";
import type { NotificationContextProviderProps } from "./NotificationContext.types";
import {
  getSubscription,
  getSubscriptionParameters
} from "./NotificationContext.utils";
import { usePwaContext } from "../PwaContext/PwaContext.hook";

const NotificationContextProvider = ({
  children
}: NotificationContextProviderProps) => {
  const [isChecked, setChecked] = useState(false);
  const [isSubscribed, toggleSubscribed] = useState<boolean>(false);
  const { config } = useConfigContext();
  const [subscribe] = useSubscribeMutation((data) => {
    if (data.subscribe) {
      toggleSubscribed(true);
    }
  });

  const { registration } = usePwaContext();

  const doSubscribe = useCallback(async () => {
    if (isSubscribed) return;
    console.log("HERE", registration);
    if (!registration) {
      return;
    }
    const subscription = await getSubscription(registration);
    if (!subscription) return null;
    const subscriptionParameters = getSubscriptionParameters(subscription);
    await subscribe(config.NOTIFICATION_POOL_ID, subscriptionParameters);
  }, [config.NOTIFICATION_POOL_ID, isSubscribed, registration, subscribe]);

  const doUnsubscribe = () => {
    toggleSubscribed(false);
  };

  const setSubscribed = async (value: boolean) => {
    if (value) {
      await doSubscribe();
    } else {
      doUnsubscribe();
    }
  };

  useEffect(() => {
    const asyncEffect = async () => {
      await doSubscribe();
    };
    if (Notification.permission === "granted" && registration && !isChecked) {
      setChecked(true);
      asyncEffect();
    }
  }, [doSubscribe, isChecked, registration]);

  return (
    <NotificationContext.Provider
      value={{
        isSubscribed,
        setSubscribed
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
