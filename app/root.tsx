import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import Application from "./components/layouts/Application";
import styles from "./styles/styles.css";
import DisplayInfosContainer from "./components/organisms/DisplayInfosContainer/DisplayInfosContainer";
import ContainerScrollPage from "./components/organisms/ContainerScrollPage/ContainerScrollPage";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const loader = async () => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return {
    x: true
  };
};

export default function App() {
  const data = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="m-0 p-0 bg-black text-lightGray w-screen h-screen overflow-hidden">
        <Application>
          <DisplayInfosContainer />
          <ContainerScrollPage className="mt-4">
            <Outlet />
          </ContainerScrollPage>
        </Application>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
