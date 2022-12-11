import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import ErrorPage from "~/components/pages/ErrorPage";

export const loader: LoaderFunction = async () => {
  const pressKitUrl = process.env.PRESSKIT_URL;
  if (!pressKitUrl) throw new Error();
  return redirect(pressKitUrl);
};

export const CatchBoundary = () => {
  return <ErrorPage
    code={404}
    message="Press kit not available"
  />
}
