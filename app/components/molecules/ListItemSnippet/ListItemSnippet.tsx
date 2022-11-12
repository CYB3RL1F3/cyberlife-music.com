import { Link } from "@remix-run/react";
import type { ListItemSnippetProps } from "./ListItemSnippet.types";
import { clsx } from "clsx";
import { theme } from "../../../theme";

const ListItemSnippet = ({ children, title, href }: ListItemSnippetProps) => {
  const cls = "italic font-semibold text-right uppercase";
  return (
    <div className="flex flex-col w-full gap-2 py-2 flex-end">
      {href ? (
        <Link className={clsx(cls, theme.linkHover)} to={href}>
          {title}
        </Link>
      ) : (
        <h3 className={cls}>{title}</h3>
      )}
      <div className="w-full">{children}</div>
    </div>
  );
};

export default ListItemSnippet;
