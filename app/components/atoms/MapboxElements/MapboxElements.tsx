import type {
  LayerProps,
  MarkerProps,
  NavigationControlProps,
  PopupProps,
  ScaleControlProps,
  SourceProps,
} from './MapboxElements.types';

import ClientOnly from '~/components/atoms/ClientOnly';
import {
  Marker as GLMarker,
  Layer as GLLayer,
  Popup as GLPopup,
  ScaleControl as GLScaleControl,
  Source as GLSource,
  NavigationControl as GLNavigationControl,
} from 'react-map-gl';
import { MarkerInstance, PopupInstance } from 'react-map-gl/src/types';

export const Marker = (props: MarkerProps<any, MarkerInstance>) => {
  return <ClientOnly>{() => <GLMarker {...props} />}</ClientOnly>;
};

export const Layer = (props: LayerProps<any>) => {
  return <ClientOnly>{() => <GLLayer {...props} />}</ClientOnly>;
};

export const Popup = (props: PopupProps<any, PopupInstance>) => {
  return <ClientOnly>{() => <GLPopup {...props} />}</ClientOnly>;
};

export const ScaleControl = (props: ScaleControlProps<any>) => {
  return <ClientOnly>{() => <GLScaleControl {...props} />}</ClientOnly>;
};

export const Source = (props: SourceProps<{}>) => {
  return <ClientOnly>{() => <GLSource {...props} />}</ClientOnly>;
};

export const NavigationControl = (props: NavigationControlProps<{}>) => {
  return <ClientOnly>{() => <GLNavigationControl {...props} />}</ClientOnly>;
};
