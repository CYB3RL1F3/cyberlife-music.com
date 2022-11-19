import Anchor from "~/components/atoms/Anchor";
import type { FooterAnchorsProps } from "./FooterAnchors.types";
import ListItem from "~/components/atoms/ListItem";

const FooterAnchors = ({ anchors }: FooterAnchorsProps) => {
  return (
    <ul className="flex flex-row items-center justify-center md:h-12 md:justify-end max-md:gap-x-4 max-md:flex-wrap">
      {anchors.map(({ href, label }, index) => (
        <ListItem index={index} key={`FooterAnchors__${href}`}>
          {href ? (
            <Anchor className="text-sm" href={href} target="_blank">
              {label}
            </Anchor>
          ) : (
            <span className="text-sm font-semibold leading-6">{label}</span>
          )}
        </ListItem>
      ))}
    </ul>
  );
};

export default FooterAnchors;
