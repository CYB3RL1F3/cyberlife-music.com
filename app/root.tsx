import React from "react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  Meta,
  useCatch,
  useLoaderData,
  useLocation,
  useMatches
} from "@remix-run/react";
import Application from "./application";
import styles from "~/styles/styles.css";
import ErrorPage from "./components/pages/ErrorPage";
import { runInfosQuery } from "~/queries/infos";
import { getConfig } from "./utils/config";

let isMount = true;

export const meta: MetaFunction = ({ data }) => {
  const description = data?.description;
  const title = "Cyberlife's music";
  const image =
    "http://res.cloudinary.com/hw2jydiif/image/upload/v1667476701/btby2qfnqpbpnnfpzdt5.webp";
  return {
    charset: "utf-8",
    description,
    expires: "0",
    image,
    "mobile-web-app-capable": "yes",
    "og:description": description,
    "og:image": image,
    "og:image:secure_url": image,
    "og:site_name": title,
    "og:title": title,
    "og:type": "website",
    pragma: "no-cache",
    robots: "all",
    title,
    "twitter:card": "summary",
    "twitter:description": description,
    "twitter:image": image,
    "twitter:site_name": title,
    "twitter:title": title,
    viewport: "width=device-width,initial-scale=1"
  };
};

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const { url } = request;
  const res = await runInfosQuery();
  const description = res?.data?.infos?.bio?.content;
  const config = getConfig();
  const data = json({
    url,
    description,
    config
  });
  return data;
};

export function CatchBoundary() {
  const { status } = useCatch();
  if (typeof window !== "undefined") console.log(window);
  const code = status === 404 ? 404 : 500;
  const config = getConfig();
  const message =
    status === 404 ? "Nothing here!" : "A technical error occured!";

  if (!config) return null;
  return (
    <html lang="en">
      <head>
        <Meta /> <Links />
        <link rel="manifest" href="/resources/manifest.webmanifest" />
      </head>
      <body className="w-screen h-screen p-0 m-0 overflow-hidden text-gray-400 bg-black">
        <Application config={config}>
          <ErrorPage code={code} message={message} />
        </Application>
      </body>
    </html>
  );
}

export default function App() {
  const data = useLoaderData();
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
        <link rel="canonical" href={data.url} />
      </head>
      <body className="w-screen h-screen p-0 m-0 overflow-hidden text-gray-400 bg-black">
        <Application config={data.config} />
      </body>
    </html>
  );
}
