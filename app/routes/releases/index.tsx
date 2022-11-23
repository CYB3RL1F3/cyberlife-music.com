import ReleasesPage from "~/components/pages/ReleasesPage";
import { useLoaderData, useTransition } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { runReleasesQuery } from "~/queries/releases";
/*
export const loader: LoaderFunction = async ({ request }) => {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  const { data, error } = await runReleasesQuery();
  if (!data || error) {
    throw new Response("Technical error", {
      status: 500
    });
  }
  const { releases } = data;
  return {
    releases
  };
};
*/
export default function Releases() {
  return <ReleasesPage />;
}
