import type { ApplicationProps } from "./Application.types";
import Background from "~/components/atoms/Background/Background";
import Header from "~/components/organisms/Header";
import Footer from "~/components/organisms/Footer";
import PageLayout from "../PageLayout/PageLayout";

const Application = ({ children }: ApplicationProps) => {
  return (
    <Background>
      <div className="relative w-screen h-screen flex flex-col">
        <Header />
        <PageLayout>{children}</PageLayout>
        <Footer />
      </div>
    </Background>
  );
};

export default Application;
