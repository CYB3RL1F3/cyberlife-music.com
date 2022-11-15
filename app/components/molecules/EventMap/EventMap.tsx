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
  const width = ref.current?.parentElement?.clientWidth || "48rem";
  return (
    <div className="w-full" ref={ref}>
      <Mapbox
        zoom={14}
        width={width}
        height={320}
        longitude={longitude}
        latitude={latitude}
        className="h-80"
      >
        <Marker
          style={{ marginLeft: "32%", marginTop: "-320px" }}
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
