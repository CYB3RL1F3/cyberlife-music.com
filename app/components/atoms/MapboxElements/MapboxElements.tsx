import type {
  LayerProps,
  MarkerProps,
  NavigationControlProps,
  PopupProps,
  ScaleControlProps,
  SourceProps
} from "./MapboxElements.types";

import ClientOnly from "~/components/atoms/ClientOnly";
import {
  Marker as GLMarker,
  Layer as GLLayer,
  Popup as GLPopup,
  ScaleControl as GLScaleControl,
  Source as GLSource,
  NavigationControl as GLNavigationControl
} from "react-map-gl";

export const Marker = (props: MarkerProps) => {
  return <ClientOnly>{() => <GLMarker {...props} />}</ClientOnly>;
};

export const Layer = (props: LayerProps) => {
  return <ClientOnly>{() => <GLLayer {...props} />}</ClientOnly>;
};

export const Popup = (props: PopupProps) => {
  return <ClientOnly>{() => <GLPopup {...props} />}</ClientOnly>;
};

export const ScaleControl = (props: ScaleControlProps) => {
  return <ClientOnly>{() => <GLScaleControl {...props} />}</ClientOnly>;
};

export const Source = (props: SourceProps) => {
  return <ClientOnly>{() => <GLSource {...props} />}</ClientOnly>;
};

export const NavigationControl = (props: NavigationControlProps) => {
  return <ClientOnly>{() => <GLNavigationControl {...props} />}</ClientOnly>;
};
