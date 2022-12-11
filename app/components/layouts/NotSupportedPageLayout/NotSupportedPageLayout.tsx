import type { NotSupportedPageLayoutProps } from "./NotSupportedPageLayout.types";
import { clsx } from "clsx";
import ListBrowsers from "~/components/organisms/ListBrowsers";

const NotSupportedPageLayout = ({
  backgroundColor,
  heading,
  browserText,
  children
}: NotSupportedPageLayoutProps) => {
  return (
    <div
      className={clsx("z-20 w-screen h-[100vh] text-white", backgroundColor)}
    >
      <div className="px-8 py-12 md:px-24 o-8">
        <h1 className="text-semilarge md:text-xxl">Uh oh! :(</h1>
        <h1 className="text-xl md:text-semilarge">{heading}</h1>
        {children}
      </div>
      <div
        className={clsx(
          "absolute z-30 top-[70vh] w-screen px-8 md:px-24 bottom o-8"
        )}
      >
        <hr className="w-full h-1 bg-white" />
        <div className="o-4">
          <p className="w-full text-md">{browserText}</p>
          <ListBrowsers />
        </div>
      </div>
    </div>
  );
};

export default NotSupportedPageLayout;
