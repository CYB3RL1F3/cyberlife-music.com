import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useMatches,
  useOutlet
} from "@remix-run/react";
import Application from "./components/layouts/Application";
import styles from "./styles/styles.css";
import DisplayInfosContainer from "./components/organisms/DisplayInfosContainer/DisplayInfosContainer";
import ContainerScrollPage from "./components/organisms/ContainerScrollPage/ContainerScrollPage";
import { AnimatePresence, motion } from "framer-motion";
import AudioContainer from "./components/molecules/AudioContainer";
import { ClientOnly } from "./components/atoms/ClientOnly/ClientOnly";
import PageDetailHeaderPortal from "./components/molecules/PageDetailHeaderPortal/PageDetailHeaderPortal";
import ConfigContextProvider from "./components/contexts/ConfigContext/ConfigContext.provider";
import NotificationContextProvider from "./components/contexts/NotificationContext";
import FooterMobile from "./components/organisms/FooterMobile";
import PwaContextProvider from "./components/contexts/PwaContext";

let isMount = true;

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export async function loader() {
  return json({
    ENV: {
      API_URL: process.env.API_URL,
      NOTIFICATION_POOL_ID: process.env.NOTIFICATION_POOL_ID,
      MAPBOX_API_KEY: process.env.MAPBOX_API_KEY
    }
  });
}
export default function App() {
  const data = useLoaderData();
  const outlet = useOutlet();
  let location = useLocation();
  let matches = useMatches();

  React.useEffect(() => {
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

  return (
    <html lang="en">
      <head>
        <Meta /> <Links />
        <link rel="manifest" href="/resources/manifest.webmanifest" />
      </head>
      <body className="w-screen h-screen p-0 m-0 overflow-hidden text-gray-400 bg-black">
        <ConfigContextProvider
          config={{
            api: data.ENV.API_URL,
            notificationPoolId: data.ENV.NOTIFICATION_POOL_ID,
            mapbox: {
              accessToken: data.ENV.MAPBOX_API_KEY,
              style: "mapbox://styles/cyberlife/cjq9kpl33b01d2smvny3ciast"
            }
          }}
        >
          <PwaContextProvider>
            <NotificationContextProvider>
              <Application>
                <DisplayInfosContainer />
                <div className="h-6">
                  <PageDetailHeaderPortal.Container />
                </div>
                <ContainerScrollPage>
                  <AnimatePresence exitBeforeEnter initial={false}>
                    <motion.div
                      className="max-md:min-h-[calc(100vh_-_21rem)]"
                      key={useLocation().pathname}
                      initial={{ opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ opacity: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      {outlet}
                    </motion.div>
                    <FooterMobile />
                  </AnimatePresence>
                </ContainerScrollPage>
                <ClientOnly>{() => <AudioContainer />}</ClientOnly>
              </Application>
            </NotificationContextProvider>
          </PwaContextProvider>
        </ConfigContextProvider>
        <ScrollRestoration /> <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`
          }}
        />
        <LiveReload />
      </body>
    </html>
  );
}
