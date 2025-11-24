import PageDetailHeaderPortal from '~/components/molecules/PageDetailHeaderPortal';
import OrderFunnelContainer from '~/components/organisms/OrderFunnelContainer';
import ReleasesPageHeader from '~/components/organisms/ReleasesPageHeader';

const CheckoutPage = () => {
  return (
    <>
      <PageDetailHeaderPortal>
        <ReleasesPageHeader />
      </PageDetailHeaderPortal>
      <div className="flex justify-center">
        <OrderFunnelContainer />
      </div>
    </>
  );
};

export default CheckoutPage;
