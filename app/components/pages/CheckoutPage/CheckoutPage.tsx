import PageDetailHeaderPortal from "~/components/molecules/PageDetailHeaderPortal";
import ButtonLinkBuyRelease from "~/components/organisms/ButtonLinkBuyRelease";
import OrderFunnelContainer from "~/components/organisms/OrderFunnelContainer";

const CheckoutPage = () => {
  return (
    <>
      <PageDetailHeaderPortal>
        <div className="flex justify-end h-16 pt-4 mr-6">
          <ButtonLinkBuyRelease />
        </div>
      </PageDetailHeaderPortal>
      <div className="flex justify-center">
        <OrderFunnelContainer />
      </div>
    </>
  );
};

export default CheckoutPage;
