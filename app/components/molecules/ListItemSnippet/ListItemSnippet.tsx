import { Link } from '@remix-run/react';

import Heading from '~/components/atoms/Heading';

import type { ListItemSnippetProps } from './ListItemSnippet.types';

const ListItemSnippet = ({ children, title, href }: ListItemSnippetProps) => {
  return (
    <div className="flex flex-col w-full gap-2 py-2 flex-end">
      {href ? (
        <Link to={href}>
          <Heading variant="italic">{title}</Heading>
        </Link>
      ) : (
        <Heading variant="italic">{title}</Heading>
      )}
      <div className="w-full">{children}</div>
    </div>
  );
};

export default ListItemSnippet;
