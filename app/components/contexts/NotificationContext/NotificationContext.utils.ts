import type { SubscribeMutationVariables } from "~/types/gql/SubscribeMutation";
import { urlBase64ToUint8Array } from "~/utils/crypt";

export const getSubscription = async (
  registration: ServiceWorkerRegistration
) => {
  if (!("Notification" in window)) {
    return null;
  }
  const permission = await window.Notification.requestPermission();
  if (permission !== "granted") {
    return null;
  }
  let subscription = await registration.pushManager.getSubscription();
  if (!subscription) {
    const subInfo = await fetch("/resources/subscribe");
    const applicationKey = await subInfo.text();

    const applicationServerKey = urlBase64ToUint8Array(applicationKey);
    subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey
    });
  }
  return subscription;
};

export const getSubscriptionKey = (
  subscription: PushSubscription,
  key: "auth" | "p256dh"
) => {
  if (!subscription.getKey) return "";
  const rawKey = subscription.getKey(key);
  if (!rawKey) return null;
  const value = Array.from(new Uint8Array(rawKey));
  if (typeof window === "undefined") return null;
  return window.btoa(String.fromCharCode.apply(null, value));
};

export const getSubscriptionParameters: (
  subscription: PushSubscription
) => SubscribeMutationVariables["subscription"] = (subscription) => {
  return {
    endpoint: subscription.endpoint,
    keys: {
      auth: getSubscriptionKey(subscription, "auth"),
      p256dh: getSubscriptionKey(subscription, "p256dh")
    }
  };
};
