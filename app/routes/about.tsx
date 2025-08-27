import AboutPage from '~/components/pages/AboutPage';
import ErrorPage from '~/components/pages/ErrorPage';

export default function AboutRoute() {
  return <AboutPage />;
}

export const CatchBoundary = () => {
  return (
    <ErrorPage code={500} message="An error occurred while loading this page" />
  );
};
