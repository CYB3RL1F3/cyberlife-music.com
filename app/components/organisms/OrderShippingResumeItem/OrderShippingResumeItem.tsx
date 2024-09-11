import type { OrderShippingResumeItemProps } from './OrderShippingResumeItem.types';

const OrderShippingResumeItem = ({
  title,
  value,
}: OrderShippingResumeItemProps) => {
  return (
    <dl className="w-full">
      <dt className="italic font-bold text-right text-gray-300 text-md">
        {title}
      </dt>
      <dd className="italic text-right text-gray-400">{value}</dd>
    </dl>
  );
};

export default OrderShippingResumeItem;
