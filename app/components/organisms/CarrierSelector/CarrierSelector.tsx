import Selector from '~/components/molecules/Selector';
import type { CarrierSelectorProps } from './CarrierSelector.types';
import { useCarrierPrices } from '~/hooks/useCarriers';

const CarrierSelector = ({
  country,
  items,
  value,
  onChange,
  label = 'Choose your transport',
}: CarrierSelectorProps) => {
  const carrierPrices = useCarrierPrices(country, items);
  console.log('CARRIER PRICES ==> ', carrierPrices);
  return (
    <Selector
      disabled={!carrierPrices.length}
      value={value}
      isSelected={(item, value) => item.carrier === value?.carrier}
      onChange={onChange}
      items={carrierPrices}
      label={label}
    />
  );
};

export default CarrierSelector;
