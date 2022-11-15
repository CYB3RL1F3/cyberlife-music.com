import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
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
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
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
          <Application>
            <DisplayInfosContainer />
            <div className="h-8">
              <PageDetailHeaderPortal.Container />
            </div>
            <ContainerScrollPage>
              <AnimatePresence exitBeforeEnter initial={false}>
                <motion.div
                  key={useLocation().pathname}
                  initial={{ opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  {outlet}
                </motion.div>
              </AnimatePresence>
            </ContainerScrollPage>
            <ClientOnly>{() => <AudioContainer />}</ClientOnly>
          </Application>
        </ConfigContextProvider>
        <ScrollRestoration />
        <Scripts />
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
