import { useInfosQuery } from '~/hooks/queries/useInfosQuery';
import DisplayInfos from '~/components/organisms/DisplayInfos';

const DisplayInfosContainer = () => {
  const { data, loading } = useInfosQuery();
  if (loading && !data) return <DisplayInfos.Skeleton />;
  if (!data) return null;
  return <DisplayInfos infos={data?.infos} />;
};

export default DisplayInfosContainer;
