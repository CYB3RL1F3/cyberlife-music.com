import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { getMeta } from "~/utils/meta";
import { useParams } from "@remix-run/react";
import ReleasePage from "~/components/pages/ReleasePage";
import ReleasesPage from "~/components/pages/ReleasesPage";
import { runReleaseQuery } from "~/queries/release";
import { ReleaseQueryRelease } from "~/types/gql/ReleaseQuery";

export type Data = {
  data: {
    release: ReleaseQueryRelease;
  };
};

export const meta: MetaFunction = ({ data }: Data) => {
  const release = data?.release;
  const description = release?.notes;
  const image =
    release?.thumb ||
    "https://res.cloudinary.com/hw2jydiif/image/upload/v1667476701/btby2qfnqpbpnnfpzdt5.webp";
  const title = release?.title || "Cyberlife's music - release";
  return getMeta({
    title,
    image,
    description
  });
};

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  if (!id) throw new Error();
  const res = await runReleaseQuery(id);
  const release = res?.data?.release;
  const data = json({
    release
  });
  return data;
};

export default function ReleaseRoute() {
  const { id } = useParams();
  if (!id) return <ReleasesPage />;
  return <ReleasePage id={id} />;
}
