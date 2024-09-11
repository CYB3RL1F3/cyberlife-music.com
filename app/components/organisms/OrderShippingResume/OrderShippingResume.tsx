import { getCountryLabelByValue } from '~/utils/business/countries';
import OrderShippingResumeItem from '../OrderShippingResumeItem';
import type { OrderShippingResumeProps } from './OrderShippingResume.types';

const OrderShippingResume = ({ checkout }: OrderShippingResumeProps) => {
  return (
    <div className="w-full o-4">
      <OrderShippingResumeItem
        title="Name"
        value={`${checkout.firstName} ${checkout.lastName}`}
      />
      <OrderShippingResumeItem
        title={
          checkout.expedition.isSameAsBilling
            ? 'Billing and shipping address'
            : 'Billing address'
        }
        value={
          <>
            {checkout.address}
            <br />
            {checkout.zipCode} {checkout.city}
            <br />
            {getCountryLabelByValue(checkout.country)}
          </>
        }
      />
      {!checkout.expedition.isSameAsBilling && (
        <OrderShippingResumeItem
          title={'Shipping address'}
          value={
            <>
              {checkout.expedition.address}
              <br />
              {checkout.expedition.zipCode} {checkout.expedition.city}
              <br />
              {checkout.expedition.country
                ? getCountryLabelByValue(checkout.expedition.country)
                : ''}
            </>
          }
        />
      )}
      <OrderShippingResumeItem title="Phone number" value={checkout.phone} />
      <OrderShippingResumeItem title="Email address" value={checkout.email} />
      {!checkout.expedition.isSameAsBilling &&
        checkout.expedition.phone !== checkout.phone && (
          <OrderShippingResumeItem
            title="Recipient phone number"
            value={checkout.expedition.phone}
          />
        )}

      {!checkout.expedition.isSameAsBilling &&
        checkout.expedition.email !== checkout.email && (
          <OrderShippingResumeItem
            title="Recipient email address"
            value={checkout.expedition.email}
          />
        )}
      <br />
    </div>
  );
};

export default OrderShippingResume;
