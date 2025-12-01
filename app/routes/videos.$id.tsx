import { MetaFunction } from '@remix-run/node';
import { useParams } from '@remix-run/react';
import ErrorPage from '~/components/pages/ErrorPage';
import VideoPage from '~/components/pages/VideoPage';
import VideosPage from '~/components/pages/VideosPage';

export const meta: MetaFunction = () => {
  return [{ name: 'referrer', content: 'strict-origin-when-cross-origin' }];
};

export default function VideoRoute() {
  const { id } = useParams();
  if (!id) return <VideosPage />;
  return <VideoPage id={id} />;
}

export const CatchBoundary = () => {
  return (
    <ErrorPage
      code={500}
      message="An error occurred while loading this video page"
    />
  );
};
