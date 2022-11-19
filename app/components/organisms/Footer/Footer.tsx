import FooterAnchorsInfosContainer from "~/components/organisms/FooterAnchorsInfosContainer";
import FooterAnchorsCopyrights from "~/components/organisms/FooterAnchorsCopyrights/FooterAnchorsCopyrights";
import PlayerWidgetMobile from "../PlayerWidgetMobile/PlayerWidgetMobile";

const Footer = () => {
  return (
    <>
      <footer className="items-center justify-between hidden w-screen h-12 px-6 md:flex">
        <FooterAnchorsCopyrights />
        <FooterAnchorsInfosContainer />
      </footer>
      <div className="mt-1 md:hidden">
        <PlayerWidgetMobile />
      </div>
    </>
  );
};

export default Footer;
