import type { PageLayoutProps } from "./PageLayout.types";

const PageLayout = ({ children, left }: PageLayoutProps) => {
  return (
    <main className="w-screen md:h-[calc(100vh_-_6rem)] flex justify-end">
      <div className="md:w-1/3">{left}</div>
      <div className="md:w-2/3 pl-8 md:py-4 mt-8 flex flex-col">{children}</div>
    </main>
  );
};

export default PageLayout;
