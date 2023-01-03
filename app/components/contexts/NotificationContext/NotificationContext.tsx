import { createContext } from "react";
import type { NotificationValues } from "./NotificationContext.types";

export const NotificationContext = createContext<NotificationValues>({
  isSubscribed: false
});
