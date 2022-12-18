import { Link } from "@remix-run/react";

const ListEventsEmpty = () => {
  return (
    <div className="flex gap-8 py-2 md:py-8">
      <div className="relative justify-end flex-auto h-24 mt-4">
        <p className="text-lg white text-text-right md:text-xl">
          No future gigs at the moment
        </p>
        <p className="mt-4 text-sm text-white md:text-right max-md:absolute max-md:w-screen sm:text-md md:text-lg">
          contact / booking :{" "}
          <Link prefetch="render" to="/contact" className="underline">
            booking@cyberlife-music.com
          </Link>
        </p>
      </div>
      <div className="h-full">
        <p className="text-white text-[60px] md:text-xxl leading-[1] w-12">
          :(
        </p>
      </div>
    </div>
  );
};

export default ListEventsEmpty;
