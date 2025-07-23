import { useParams, useSearchParams } from '@remix-run/react';
import DownloadOrderPage from '~/components/pages/DownloadOrderPage';
import ErrorPage from '~/components/pages/ErrorPage';

export type RouteParams = {
  id: string;
};

export default function DownloadOrderRoute() {
  const { id } = useParams<RouteParams>();
  const [value] = useSearchParams();
  const token = value.get('token');

  console.log('id:', id, ', token:', token);

  if (!id) {
    return (
      <ErrorPage code={400} message="Invalid request: order ID not found!" />
    );
  }

  if (!token) {
    return (
      <ErrorPage code={400} message="Invalid request: token is not provided!" />
    );
  }

  return <DownloadOrderPage id={id} token={token} />;
}
