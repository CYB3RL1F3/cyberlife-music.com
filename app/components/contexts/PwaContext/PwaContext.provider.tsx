import { useEffect, useState } from "react";
import { PwaContext } from "./PwaContext";
import type { PwaContextProps } from "./PwaContext.types";

const PwaContextProvider = ({ children }: PwaContextProps) => {
  const [registration, setRegistration] =
    useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const loadPwaApplication = () => {
        navigator.serviceWorker
          .register("/entry.worker.js")
          .then(() => navigator.serviceWorker.ready)
          .then(() => {
            if (navigator.serviceWorker.controller) {
              navigator.serviceWorker.controller.postMessage({
                type: "SYNC_REMIX_MANIFEST",
                manifest: window.__remixManifest
              });
            } else {
              navigator.serviceWorker.addEventListener(
                "controllerchange",
                () => {
                  navigator.serviceWorker.controller?.postMessage({
                    type: "SYNC_REMIX_MANIFEST",
                    manifest: window.__remixManifest
                  });
                }
              );
            }
          })
          .catch((error) => {
            console.error("Service worker registration failed", error);
          });

        navigator.serviceWorker.ready.then((registration) => {
          setRegistration(registration);
        });
      };

      // Use the window load event to keep the page load performant
      loadPwaApplication();
    }
  }, []);
  return (
    <PwaContext.Provider
      value={{
        registration
      }}
    >
      {children}
    </PwaContext.Provider>
  );
};

export default PwaContextProvider;
