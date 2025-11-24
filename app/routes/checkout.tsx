import CheckoutPage from '~/components/pages/CheckoutPage';
import ErrorPage from '~/components/pages/ErrorPage';

export default function CheckoutRoute() {
  return <CheckoutPage />;
}

export const CatchBoundary = () => {
  return (
    <ErrorPage code={500} message="An error occurred while loading cart page" />
  );
};
