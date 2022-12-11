import NotSupportedPage from "~/components/pages/NotSupportedPage";
import { isIe } from "~/utils/browser";

export default function NotSupportedRoute() {
  const isTheWorstBrowserOfThePlanet = isIe();
  return <NotSupportedPage isIe={isTheWorstBrowserOfThePlanet} />;
}
