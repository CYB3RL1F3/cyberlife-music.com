import type { ApplicationProps } from "./Layout.types";
import Background from "~/components/atoms/Background/Background";
import Header from "~/components/organisms/Header";
import Footer from "~/components/organisms/Footer";
import PageLayout from "../PageLayout/PageLayout";
import ExtraContent from "~/components/organisms/ExtraContent";
import { useResize } from "~/hooks/useResize";
import ModalPortal from "~/components/molecules/ModalPortal";

const Layout = ({ children }: ApplicationProps) => {
  useResize(() => {
    if (typeof window === "undefined") return;
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  return (
    <Background>
      <div className="relative flex flex-col w-screen h-screen">
        <Header />
        <PageLayout left={<ExtraContent />}>{children}</PageLayout>
        <Footer />
        <ModalPortal.Container />
      </div>
    </Background>
  );
};

export default Layout;
