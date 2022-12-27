import Anchor from "~/components/atoms/Anchor";
import type { FooterAnchorsProps } from "./FooterAnchors.types";
import InlineListItem from "~/components/atoms/InlineListItem";

const FooterAnchors = ({ anchors }: FooterAnchorsProps) => {
  return (
    <ul className="flex flex-row items-center justify-center md:h-12 md:justify-end max-md:gap-x-4 max-md:flex-wrap">
      {anchors.map(({ href, label }, index) => (
        <InlineListItem index={index} key={`FooterAnchors__${href}`}>
          {href ? (
            <Anchor className="text-sm" href={href} target="_blank">
              {label}
            </Anchor>
          ) : (
            <span className="text-sm font-semibold leading-6">{label}</span>
          )}
        </InlineListItem>
      ))}
    </ul>
  );
};

export default FooterAnchors;
