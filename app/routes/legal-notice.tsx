import ErrorPage from '~/components/pages/ErrorPage';
import LegalNoticePage from '~/components/pages/LegalNoticePage';

export default function LegalNoticeRoute() {
  return <LegalNoticePage />;
}

export const CatchBoundary = () => {
  return (
    <ErrorPage
      code={500}
      message="An error occurred while loading legal notices page"
    />
  );
};
