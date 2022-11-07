import type { FooterAnchorsProps } from "~/components/molecules/FooterAnchors";
import FooterAnchors from "~/components/molecules/FooterAnchors";
import type { FooterAnchorsInfosProps } from "./FooterAnchorsInfos.types";
import { useMemo } from "react";

const FooterAnchorsInfos = ({ infos }: FooterAnchorsInfosProps) => {
  const anchors: FooterAnchorsProps["anchors"] = useMemo(
    () => [
      {
        label: "Soundcloud",
        href: infos.soundcloud
      },
      {
        label: "Discogs",
        href: infos.discogs
      },
      {
        label: "Instagram",
        href: infos.instagram
      },
      {
        label: "Facebook",
        href: infos.facebook
      },
      {
        label: "Twitter",
        href: infos.twitter
      },
      {
        label: "Resident Advisor",
        href: infos.RA
      },
      {
        label: "Mastodon",
        href: `https://mastodon.social/@cyberlife`
      }
    ],
    [infos]
  );
  return <FooterAnchors anchors={anchors} />;
};

export default FooterAnchorsInfos;
