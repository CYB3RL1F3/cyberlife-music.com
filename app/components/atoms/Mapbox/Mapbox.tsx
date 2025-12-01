import ClientOnly from '~/components/atoms/ClientOnly';

import MapboxComponent from './Mapbox.component';
import type { MapboxProps } from './Mapbox.types';

const Mapbox = (props: MapboxProps) => {
  return <ClientOnly>{() => <MapboxComponent {...props} />}</ClientOnly>;
};

export default Mapbox;
