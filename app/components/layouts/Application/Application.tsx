import type { ApplicationProps } from "./Application.types";
import Background from "~/components/atoms/Background/Background";
import Header from "~/components/organisms/Header";
import Footer from "~/components/organisms/Footer";
import PageLayout from "../PageLayout/PageLayout";
import ExtraContent from "~/components/organisms/ExtraContent";

const Application = ({ children }: ApplicationProps) => {
  return (
    <Background>
      <div className="relative flex flex-col w-screen h-screen">
        <Header />
        <PageLayout left={<ExtraContent />}>{children}</PageLayout>
        <Footer />
      </div>
    </Background>
  );
};

export default Application;
