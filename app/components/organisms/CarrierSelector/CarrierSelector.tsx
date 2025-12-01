import Selector from '~/components/molecules/Selector';
import { useCarrierPrices } from '~/hooks/data/useCarriers';

import type { CarrierSelectorProps } from './CarrierSelector.types';

const CarrierSelector = ({
  country,
  items,
  value,
  onChange,
  label = 'Choose your transport',
}: CarrierSelectorProps) => {
  const carrierPrices = useCarrierPrices(country, items);
  console.log('CarrierSelector render', { country, carrierPrices });

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
