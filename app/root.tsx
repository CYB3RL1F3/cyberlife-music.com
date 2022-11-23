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
import styles from "./styles/styles.css";
import ErrorPage from "./components/pages/ErrorPage";
import { runInfosQuery } from "~/queries/infos";

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
  const data = json({
    url,
    description,
    ENV: {
      API_URL: process.env.API_URL,
      NOTIFICATION_POOL_ID: process.env.NOTIFICATION_POOL_ID,
      MAPBOX_API_KEY: process.env.MAPBOX_API_KEY
    }
  });
  return data;
};

export function CatchBoundary() {
  const { status } = useCatch();
  if (typeof window !== "undefined") console.log(window);
  const code = status === 404 ? 404 : 500;
  const api =
    typeof window !== "undefined"
      ? window.ENV.api || ""
      : typeof process !== "undefined"
      ? process.env.API_URL || ""
      : "";
  const notificationPoolId =
    typeof window !== "undefined"
      ? window.ENV.notificationPoolId || ""
      : typeof process !== "undefined"
      ? process.env.NOTIFICATION_POOL_ID || ""
      : "";
  const message =
    status === 404 ? "Nothing here!" : "A technical error occured!";

  const config = {
    api,
    notificationPoolId,
    mapbox: {
      accessToken: "",
      style: "mapbox://styles/cyberlife/cjq9kpl33b01d2smvny3ciast"
    }
  };
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
        <Application
          config={{
            api: data.ENV.API_URL,
            notificationPoolId: data.ENV.NOTIFICATION_POOL_ID,
            mapbox: {
              accessToken: data.ENV.MAPBOX_API_KEY,
              style: "mapbox://styles/cyberlife/cjq9kpl33b01d2smvny3ciast"
            }
          }}
        />
      </body>
    </html>
  );
}
