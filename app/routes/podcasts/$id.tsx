import { useParams } from "@remix-run/react";

export default function Podcast() {
  const { id } = useParams();
  return <h1>Podcast {id}</h1>;
}
