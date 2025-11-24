import Map, {
  NavigationControl,
  ViewStateChangeEvent,
} from 'react-map-gl/mapbox';
import type { Coordinates, MapboxProps } from './Mapbox.types';
import { useConfigContext } from '~/components/contexts/ConfigContext';
import { useCallback } from 'react';

const Mapbox = ({
  children,
  width,
  height,
  zoom = 11,
  longitude,
  latitude,
  onZoomChanged,
  onCenterChanged,
  onMapRendered,
  onMapClicked,
}: MapboxProps) => {
  const {
    config: {
      mapbox: { accessToken, style },
    },
  } = useConfigContext();
  const onZoom = useCallback(
    (event: ViewStateChangeEvent) => {
      onZoomChanged?.(event.target.getZoom());
    },
    [onZoomChanged],
  );

  const onDragEnd = useCallback(
    (event: ViewStateChangeEvent) => {
      const center = event.target.getCenter();
      const coordinates: Coordinates = [center.lng, center.lat];
      onCenterChanged?.(coordinates);
    },
    [onCenterChanged],
  );

  return (
    <Map
      mapboxAccessToken={accessToken}
      mapStyle={style}
      style={{ width, height }}
      initialViewState={{
        longitude,
        latitude,
        zoom,
      }}
      attributionControl={false}
      onZoom={onZoom}
      onZoomEnd={onZoom}
      onDragEnd={onDragEnd}
      onRender={onMapRendered}
      onClick={onMapClicked}
    >
      <NavigationControl visualizePitch position="top-left" />
      <>{children}</>
    </Map>
  );
};

export default Mapbox;
