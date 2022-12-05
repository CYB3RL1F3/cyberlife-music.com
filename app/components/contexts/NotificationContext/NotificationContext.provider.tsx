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
import { useUnSubscribeMutation } from "~/hooks/mutations/useUnsubscribeMutation";
import { useLocalStorage } from "~/hooks/useLocaleStorage";

const NotificationContextProvider = ({
  children
}: NotificationContextProviderProps) => {
  const [isVerified, setVerified] = useState(false);
  const [isSubscribed, toggleSubscribed] = useState<boolean>(false);
  const { config } = useConfigContext();
  const [subscribe] = useSubscribeMutation((data) => {
    if (data.subscribe) {
      toggleSubscribed(true);
    }
  });

  const [storedSubscribeState, setStoredSubscribeState] = useLocalStorage<
    boolean | undefined
  >("subscription", undefined);

  const [unsubscribe] = useUnSubscribeMutation((data) => {
    if (data.unsubscribe.deleted) {
      toggleSubscribed(false);
    }
  });

  const { registration } = usePwaContext();

  const doSubscribe = useCallback(async () => {
    if (!registration || isSubscribed) {
      return;
    }
    const subscription = await getSubscription(registration);
    if (!subscription?.endpoint) return null;
    const subscriptionParameters = getSubscriptionParameters(subscription);
    await subscribe(config.notificationPoolId, subscriptionParameters);
    setStoredSubscribeState(true);
  }, [
    config.notificationPoolId,
    isSubscribed,
    registration,
    setStoredSubscribeState,
    subscribe
  ]);

  const doUnsubscribe = async () => {
    if (!registration || !isSubscribed) return;
    const subscription = await getSubscription(registration);
    if (!subscription?.endpoint) return;
    await unsubscribe(config.notificationPoolId, subscription.endpoint);
    setStoredSubscribeState(false);
  };

  const setSubscribed = async (value: boolean) => {
    if (value) {
      await doSubscribe();
    } else {
      doUnsubscribe();
    }
    setVerified(true);
  };

  useEffect(() => {
    const asyncEffect = async () => {
      await doSubscribe();
    };
    if (typeof Notification === "undefined") return;
    if (
      Notification.permission === "granted" &&
      registration &&
      !isVerified &&
      (storedSubscribeState || typeof storedSubscribeState === "undefined")
    ) {
      setVerified(true);
      asyncEffect();
    }
  }, [doSubscribe, isVerified, registration, storedSubscribeState]);

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
