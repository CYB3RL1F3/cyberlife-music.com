import { useState } from "react";
import { NotificationContext } from "./NotificationContext";
import type { NotificationContextProviderProps } from "./NotificationContext.types";

const NotificationContextProvider = ({
  children
}: NotificationContextProviderProps) => {
  const [isActive, setActive] = useState<boolean | undefined>();
  return (
    <NotificationContext.Provider
      value={{
        isActive,
        setActive
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
