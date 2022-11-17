import type { ReactNode } from "react";

export type NotificationValues = {
  notifications?: [];
  isActive?: boolean;
  setActive?: (isActive: NotificationValues["isActive"]) => void;
};

export type NotificationContextProviderProps = {
  children?: ReactNode;
};
