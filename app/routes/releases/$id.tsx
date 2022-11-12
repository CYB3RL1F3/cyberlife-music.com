import { useParams } from "@remix-run/react";
import ReleasePage from "~/components/pages/ReleasePage";

export default function Release() {
  const { id } = useParams();
  if (!id) return null;
  return <ReleasePage id={id} />;
}
