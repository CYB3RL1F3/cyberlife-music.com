import { lazy, Suspense } from "react";
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
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

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  const outlet = useOutlet();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="w-screen h-screen p-0 m-0 overflow-hidden text-gray-400 bg-black">
        <Application>
          <DisplayInfosContainer />
          <ContainerScrollPage className="mt-4">
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
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
