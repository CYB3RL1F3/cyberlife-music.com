import type { PageLayoutProps } from "./PageLayout.types";

const PageLayout = ({ children, left }: PageLayoutProps) => {
  return (
    <main className="w-screen md:h-[calc(100vh_-_6rem)] flex justify-end lg:flex-row flex-col">
      <div className="hidden lg:block lg:w-1/3">{left}</div>
      <div className="flex flex-col w-full pl-3 md:pl-8 md:mt-8 lg:w-2/3 md:py-4">
        {children}
      </div>
    </main>
  );
};

export default PageLayout;
