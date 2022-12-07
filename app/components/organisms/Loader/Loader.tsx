import Spinner from "~/components/atoms/Spinner";
import type { LoaderProps } from "./Loader.types";

const Loader = ({ notification }: LoaderProps) => {
  return (
    <article className="flex items-center justify-center w-full h-[50vh]">
      <div className="flex flex-col items-center justify-center w-full o-16">
        <Spinner variant="lg" />
        <h3 className="w-full text-center">{notification}</h3>
      </div>
    </article>
  );
};

export default Loader;
