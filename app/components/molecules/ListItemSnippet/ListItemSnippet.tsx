import { Link } from "@remix-run/react";
import type { ListItemSnippetProps } from "./ListItemSnippet.types";
import { clsx } from "clsx";
import { theme } from "../../../theme";

const ListItemSnippet = ({ children, title, href }: ListItemSnippetProps) => {
  return (
    <div className="flex flex-col w-full gap-2 py-2 flex-end">
      <Link
        className={clsx(
          "italic font-semibold text-right uppercase",
          theme.linkHover
        )}
        to={href}
      >
        {title}
      </Link>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default ListItemSnippet;
