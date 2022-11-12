import ListItem from "~/components/molecules/ListItem/ListItem";
import ListLinkIcons from "~/components/molecules/ListLinkIcons/ListLinkIcons";
import type { PageDetailLayoutProps } from "./PageDetailLayout.types";

const PageDetailLayout = ({
  thumbnail,
  children,
  linkIcons
}: PageDetailLayoutProps) => {
  return (
    <ListItem thumbnail={thumbnail}>
      <div className="flex flex-col justify-between flex-auto">
        <div className="mb-2">{children}</div>
        <ListLinkIcons linkIcons={linkIcons} />
      </div>
    </ListItem>
  );
};

export default PageDetailLayout;
