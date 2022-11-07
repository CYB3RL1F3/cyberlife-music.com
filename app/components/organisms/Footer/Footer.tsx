import FooterAnchorsInfosContainer from "~/components/organisms/FooterAnchorsInfosContainer";
import FooterAnchorsCopyrights from "~/components/organisms/FooterAnchorsCopyrights/FooterAnchorsCopyrights";

const Footer = () => {
  return (
    <footer className="h-12 w-screen flex items-center justify-between px-6">
      <FooterAnchorsCopyrights />
      <FooterAnchorsInfosContainer />
    </footer>
  );
};

export default Footer;
