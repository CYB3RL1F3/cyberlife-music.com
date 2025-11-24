import ListSeparator from '~/components/molecules/ListSeparator';
import type { SummaryLayoutProps } from './SummaryLayout.types';

const SummaryLayout = ({ children, title, extra }: SummaryLayoutProps) => {
  return (
    <div className="w-full o-4">
      {title && <ListSeparator>{title}</ListSeparator>}
      <div className="w-full">{children}</div>
      {extra && (
        <div className="flex items-center justify-end w-full pb-4 h-fit">
          {extra}
        </div>
      )}
    </div>
  );
};

export default SummaryLayout;
