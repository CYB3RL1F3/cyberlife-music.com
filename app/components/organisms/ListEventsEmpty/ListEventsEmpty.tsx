import { Link } from "@remix-run/react";
import type { ListEventsEmptyProps } from "./ListEventsEmpty.types";

const ListEventsEmpty = ({ ...props }: ListEventsEmptyProps) => {
  return (
    <div className="flex gap-8 py-8">
      <div className="justify-end flex-auto h-24 mt-4">
        <p className="text-xl text-right text-white">
          No future gigs at the moment
        </p>
        <p className="mt-4 text-lg text-right text-white">
          contact / booking :{" "}
          <Link to="/contact" className="underline">
            booking@cyberlife-music.com
          </Link>
        </p>
      </div>
      <div className="h-full">
        <p className="text-white text-xxl leading-[1] w-12">:(</p>
      </div>
    </div>
  );
};

export default ListEventsEmpty;
