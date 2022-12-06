import { useEffect } from "react";

export const useModalOpen = () => {
  useEffect(() => {
    const randomId = Math.random().toString(36).substring(2, 9);
    const className = `modal-open-${randomId}`;

    document.body.classList.add(className);

    return () => {
      document.body.classList.remove(className);
    };
  }, []);
};
