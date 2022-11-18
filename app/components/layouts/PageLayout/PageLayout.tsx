import type { PageLayoutProps } from "./PageLayout.types";

const PageLayout = ({ children, left }: PageLayoutProps) => {
  return (
    <main className="w-screen md:h-[calc(100vh_-_6rem)] flex justify-end md:flex-row flex-col">
      <div className="md:w-1/3">{left}</div>
      <div className="flex flex-col w-full pl-8 md:mt-8 md:w-2/3 md:py-4">
        {children}
      </div>
    </main>
  );
};

export default PageLayout;
