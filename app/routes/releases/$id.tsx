import { useParams } from "@remix-run/react";

export default function Release() {
  const { id } = useParams();
  return <h1>Release {id}</h1>;
}
