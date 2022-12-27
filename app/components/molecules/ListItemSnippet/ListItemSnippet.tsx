import { Link } from "@remix-run/react";
import type { ListItemSnippetProps } from "./ListItemSnippet.types";

const ListItemSnippet = ({ children, title, href }: ListItemSnippetProps) => {
  const cls =
    "italic font-semibold text-right uppercase text-sm md:text-md cursor:pointer hover:text-white";
  return (
    <div className="flex flex-col w-full gap-2 py-2 flex-end">
      {href ? (
        <Link className={cls} to={href}>
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
