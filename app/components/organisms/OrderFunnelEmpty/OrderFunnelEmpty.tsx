
import ButtonLink from "~/components/atoms/ButtonLink";
import FormHeading from "~/components/organisms/FormHeading";

  const OrderFunnelEmpty = () => {
    return <div className="flex flex-col items-end justify-end w-full gap-4">
      <FormHeading
        title="No order here!"
        description="You must select at least one item to purchase before checking out any order!"
      />
      <div className="flex justify-end w-full">

        <div className="flex flex-col items-end mt-4 w-fit o-8">
          <p className="text-gray-500 text-md">Please, select at least one item to proceed with the order.</p>
          <ButtonLink className="w-fit" href="/releases">
            Purchase some items
          </ButtonLink>
        </div>
      </div>
    </div>
  }

  export default OrderFunnelEmpty;
  