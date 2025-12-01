import { useParams } from '@remix-run/react';

import ErrorPage from '~/components/pages/ErrorPage';
import ReleasePage from '~/components/pages/ReleasePage';
import ReleasesPage from '~/components/pages/ReleasesPage';

export default function ReleaseRoute() {
  const { id } = useParams();
  console.log('RELEASE ID >> ', id);

  if (!id) return <ReleasesPage />;
  return <ReleasePage id={id} />;
}

export const CatchBoundary = () => {
  return (
    <ErrorPage
      code={500}
      message="An error occurred while loading this release page"
    />
  );
};
