import { cn } from '~/utils/cn';

import Anchor from '~/components/atoms/Anchor';
import InlineListItem from '~/components/atoms/InlineListItem';

import type { FooterAnchorsProps } from './FooterAnchors.types';

const FooterAnchors = ({ anchors, className }: FooterAnchorsProps) => {
  return (
    <ul
      className={cn(
        'flex flex-col md:flex-row md:items-center justify-center md:h-12 md:justify-end max-md:flex-wrap',
        className,
      )}
    >
      {anchors.map(({ href, label }, index) => (
        <InlineListItem index={index} key={`FooterAnchors__${href}`}>
          {href ? (
            <Anchor
              className="text-sm whitespace-nowrap"
              href={href}
              target="_blank"
            >
              {label}
            </Anchor>
          ) : (
            <span className="text-sm font-semibold leading-6 whitespace-nowrap">
              {label}
            </span>
          )}
        </InlineListItem>
      ))}
    </ul>
  );
};

export default FooterAnchors;
