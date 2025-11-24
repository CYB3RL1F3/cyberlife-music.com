import { MetaFunction } from '@remix-run/node';
import { useParams } from '@remix-run/react';
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
