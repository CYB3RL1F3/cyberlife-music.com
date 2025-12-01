import FooterAnchorsInfos from '~/components/organisms/FooterAnchorsInfos/FooterAnchorsInfos';
import { useInfosQuery } from '~/hooks/queries/useInfosQuery';

const FooterAnchorsInfosContainer = () => {
  const { data } = useInfosQuery();
  if (!data?.infos) return null;
  return <FooterAnchorsInfos infos={data.infos} />;
};

export default FooterAnchorsInfosContainer;
