import Icon from "~/components/atoms/Icon";
import Mapbox from "~/components/atoms/Mapbox";
import { Marker } from "~/components/atoms/MapboxElements";
import type { EventMapProps } from "./EventMap.types";
import { TfiLocationPin } from "react-icons/tfi";
import type { MutableRefObject } from "react";
import { useRef } from "react";

const EventMap = ({ location }: EventMapProps) => {
  const [longitude, latitude] = location.position!;
  const ref = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

  const height = 320;
  return (
    <div className="w-full" ref={ref}>
      <Mapbox
        zoom={14}
        width={"100%"}
        height={height}
        longitude={longitude}
        latitude={latitude}
        className="h-80"
        onMapRendered={(event) => event.target.resize()}
      >
        <Marker
          style={{ marginLeft: "32%", marginTop: `-${height}px` }}
          longitude={longitude}
          latitude={latitude}
        >
          <Icon size={32} icon={<TfiLocationPin />} />
        </Marker>
      </Mapbox>
    </div>
  );
};

export default EventMap;
