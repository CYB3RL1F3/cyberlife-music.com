import Anchor from "~/components/atoms/Anchor";
import type { FooterAnchorsProps } from "./FooterAnchors.types";
import ListItem from "~/components/atoms/ListItem";
import clsx from "clsx";
import { theme } from "~/theme";

const FooterAnchors = ({ anchors }: FooterAnchorsProps) => {
  return (
    <ul className="flex flex-row h-12 items-center justify-end">
      {anchors.map(({ href, label }, index) => (
        <ListItem index={index} key={`FooterAnchors__${href}`}>
          {href ? (
            <Anchor href={href} target="_blank">
              {label}
            </Anchor>
          ) : (
            <span className={clsx(theme.midSemiBold)}>{label}</span>
          )}
        </ListItem>
      ))}
    </ul>
  );
};

export default FooterAnchors;
