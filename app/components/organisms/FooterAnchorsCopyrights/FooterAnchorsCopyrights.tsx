import type { FooterAnchorsProps } from "~/components/molecules/FooterAnchors";
import FooterAnchors from "~/components/molecules/FooterAnchors";

const FooterAnchorsCopyrights = () => {
  const anchors: FooterAnchorsProps["anchors"] = [
    {
      label: "© Cyberlife",
      href: "https://github.com/CYB3RL1F3",
      target: "_blank"
    },
    {
      label: "2022",
      href: ""
    },
    {
      label: "About website",
      href: "/about"
    }
  ];
  return <FooterAnchors anchors={anchors} />;
};

export default FooterAnchorsCopyrights;
