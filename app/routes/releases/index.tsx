import ReleasesPage from "~/components/pages/ReleasesPage";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { runInfosQuery } from "~/queries/infos";
import { getConfig } from "~/utils/config";
import { getMeta } from "~/utils/meta";

export const meta: MetaFunction = ({ data }) => {
  const description = data?.description;
  const title = `Cyberlife Music - Releases`;
  return getMeta({
    title,
    description
  });
};

export const loader: LoaderFunction = async () => {
  const res = await runInfosQuery();
  const description = res?.data?.infos?.bio?.content;
  const config = getConfig();
  const data = json({
    description,
    config
  });
  return data;
};

export default function ReleasesRoute() {
  return <ReleasesPage />;
}
