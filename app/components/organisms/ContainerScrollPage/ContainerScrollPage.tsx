import type { ContainerScrollPageProps } from "./ContainerScrollPage.types";
import clsx from "clsx";

const ContainerScrollPage = ({
  children,
  className
}: ContainerScrollPageProps) => {
  return (
    <section
      className={clsx(
        "ml-48 mx-2 pr-4 flex-auto overflow-x-visible overflow-y-scroll py-12 mask-page scroll-py-4 scrollbar scrollbar-w-1 scrollbar-thumb-gray-400 scrollbar-track-black",
        className
      )}
    >
      {children}
    </section>
  );
};

export default ContainerScrollPage;
