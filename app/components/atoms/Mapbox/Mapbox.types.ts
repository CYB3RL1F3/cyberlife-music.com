import type { ReactNode } from "react";
import type { MapboxEvent, MapLayerMouseEvent } from "react-map-gl";

export type Coordinates = [number, number];

export type Mark = {
  id: string;
  coordinates: Coordinates;
  marker: JSX.Element;
};

export type MapboxProps = {
  longitude?: number;
  latitude?: number;
  zoom?: number;
  width: number | string;
  height: number | string;
  className?: string;
  clusterMarker?: (coordinates: Coordinates, pointCount: number) => any;
  markupPopup?: JSX.Element;
  onZoomChanged?: (zoom?: number) => void;
  onCenterChanged?: (center?: Coordinates) => void;
  onMapRendered?: (event: MapboxEvent) => void;
  onMapClicked?: (event: MapLayerMouseEvent) => void;
  children?: ReactNode;
};
