import { useInfosQuery } from "~/hooks/queries/useInfosQuery";
import DisplayInfos from "../DisplayInfos/DisplayInfos";

const DisplayInfosContainer = () => {
  const { data, loading } = useInfosQuery();
  if (!data || loading) return null;
  return <DisplayInfos infos={data?.infos} />;
};

export default DisplayInfosContainer;
