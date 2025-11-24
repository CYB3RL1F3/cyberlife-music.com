import type { ReactNode } from 'react';
import type { MapEvent, MapMouseEvent } from 'react-map-gl/mapbox';

export type Coordinates = [number, number];

export type Mark = {
  id: string;
  coordinates: Coordinates;
  marker: ReactNode;
};

export type MapboxProps = {
  longitude?: number;
  latitude?: number;
  zoom?: number;
  width: number | string;
  height: number | string;
  className?: string;
  clusterMarker?: (coordinates: Coordinates, pointCount: number) => any;
  markupPopup?: ReactNode;
  onZoomChanged?: (zoom?: number) => void;
  onCenterChanged?: (center?: Coordinates) => void;
  onMapClicked?: (event: MapMouseEvent) => void;
  onMapRendered?: (event: MapEvent) => void;
  children?: ReactNode;
};
