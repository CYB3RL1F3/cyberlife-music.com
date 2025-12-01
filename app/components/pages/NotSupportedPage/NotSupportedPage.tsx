import NotSupportedIe from '~/components/organisms/NotSupportedIe';
import NotSupportedTooOld from '~/components/organisms/NotSupportedTooOld';

import type { NotSupportedPageProps } from './NotSupportedPage.types';

const NotSupportedPage = ({ isIe }: NotSupportedPageProps) => {
  return isIe ? <NotSupportedIe /> : <NotSupportedTooOld />;
};

export default NotSupportedPage;
