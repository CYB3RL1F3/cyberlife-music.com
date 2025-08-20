import ListSeparator from '~/components/molecules/ListSeparator';
import type { SummaryLayoutProps } from './SummaryLayout.types';

const SummaryLayout = ({ children, title, extra }: SummaryLayoutProps) => {
  return (
    <div className="w-full o-4 border-b border-gray-500">
      {title && <ListSeparator>{title}</ListSeparator>}
      <div className="w-full">{children}</div>
      {extra && (
        <div className="w-full flex justify-end items-center h-fit pb-4">
          {extra}
        </div>
      )}
    </div>
  );
};

export default SummaryLayout;
