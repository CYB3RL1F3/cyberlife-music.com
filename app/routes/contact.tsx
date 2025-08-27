import ContactPage from '~/components/pages/ContactPage';
import ErrorPage from '~/components/pages/ErrorPage';

export default function ContactRoute() {
  return <ContactPage />;
}

export const CatchBoundary = () => {
  return (
    <ErrorPage
      code={500}
      message="An error occurred while loading contact page"
    />
  );
};
