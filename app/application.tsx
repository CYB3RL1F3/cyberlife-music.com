import {
  LiveReload,
  Scripts,
  ScrollRestoration,
  useLocation,
  useMatches,
  useOutlet
} from "@remix-run/react";

import Layout from "./components/layouts/Layout";
import DisplayInfosContainer from "./components/organisms/DisplayInfosContainer/DisplayInfosContainer";
import ContainerScrollPage from "./components/organisms/ContainerScrollPage/ContainerScrollPage";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion
} from "framer-motion";
import AudioContainer from "./components/molecules/AudioContainer";
import { ClientOnly } from "./components/atoms/ClientOnly/ClientOnly";
import PageDetailHeaderPortal from "./components/molecules/PageDetailHeaderPortal/PageDetailHeaderPortal";
import ConfigContextProvider from "./components/contexts/ConfigContext/ConfigContext.provider";
import NotificationContextProvider from "./components/contexts/NotificationContext";
import FooterMobile from "./components/organisms/FooterMobile";
import PwaContextProvider from "./components/contexts/PwaContext";
import type { Config } from "./components/contexts/ConfigContext/ConfigContext.types";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { isSupported } from "./utils/browser";
import NotSupportedPage from "./components/pages/NotSupportedPage";
import PlayerContextProvider from "./components/contexts/PlayerContext";
import { ToastContainer } from "react-toastify";
import NoScript from "./components/organisms/NoScript";
import CartContextProvider from "./components/contexts/CartContext/CartContext.provider";

export type ApplicationProps = {
  config: Config;
  children?: ReactNode;
};

let isMount = true;

const Application = ({ config, children }: ApplicationProps) => {
  let location = useLocation();
  let matches = useMatches();

  const outlet = useOutlet();

  useEffect(() => {
    let mounted = isMount;
    isMount = false;
    if ("serviceWorker" in navigator) {
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller?.postMessage({
          type: "REMIX_NAVIGATION",
          isMount: mounted,
          location,
          matches,
          manifest: window.__remixManifest
        });
      } else {
        let listener = async () => {
          await navigator.serviceWorker.ready;
          navigator.serviceWorker.controller?.postMessage({
            type: "REMIX_NAVIGATION",
            isMount: mounted,
            location,
            matches,
            manifest: window.__remixManifest
          });
        };
        navigator.serviceWorker.addEventListener("controllerchange", listener);
        return () => {
          navigator.serviceWorker.removeEventListener(
            "controllerchange",
            listener
          );
        };
      }
    }
  }, [location, matches]);

  const isAppSupported = isSupported();

  if (!isAppSupported && typeof window !== "undefined") {
    return <NotSupportedPage />;
  }

  return (
    <>
      <LazyMotion features={domAnimation}>
        <ConfigContextProvider config={config}>
          <PlayerContextProvider>
            <CartContextProvider>
              <PwaContextProvider>
                <NotificationContextProvider>
                  <Layout>
                    <DisplayInfosContainer />
                    <div className="relative">
                      <div className="absolute z-10 w-full">
                        <PageDetailHeaderPortal.Container />
                      </div>
                      <ContainerScrollPage>
                        <NoScript />
                        <AnimatePresence mode="wait">
                          <motion.div
                            className="max-md:min-h-[calc(100vh_-_21rem)]"
                            key={location.pathname}
                            initial={{ opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ opacity: 0.8 }}
                            transition={{ duration: 0.3 }}
                          >
                            {children ?? outlet}
                          </motion.div>
                          <FooterMobile />
                        </AnimatePresence>
                      </ContainerScrollPage>
                    </div>
                    <ClientOnly>{() => <AudioContainer />}</ClientOnly>
                  </Layout>
                  <ToastContainer
                    role="alert"
                    position="bottom-left"
                    theme="colored"
                    autoClose={6000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    pauseOnHover
                  />
                </NotificationContextProvider>
              </PwaContextProvider>
            </CartContextProvider>
          </PlayerContextProvider>
        </ConfigContextProvider>
      </LazyMotion>
      <ScrollRestoration /> <Scripts />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.ENV = ${JSON.stringify(config)}`
        }}
      />
      <LiveReload />
    </>
  );
};

export default Application;
