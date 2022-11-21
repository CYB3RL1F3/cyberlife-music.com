import type { ReactNode } from "react";

export type NotificationValues = {
  notifications?: [];
  isSubscribed: boolean;
  setSubscribed?: (
    isSubscribed: NotificationValues["isSubscribed"]
  ) => Promise<void>;
};

export type NotificationContextProviderProps = {
  children?: ReactNode;
};
