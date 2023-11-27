import { useParams } from "@remix-run/react";
import ReleasePage from "~/components/pages/ReleasePage";
import ReleasesPage from "~/components/pages/ReleasesPage";

export default function ReleaseRoute() {
  const { id } = useParams();
  if (!id) return <ReleasesPage />;
  return <ReleasePage id={id} />;
}
