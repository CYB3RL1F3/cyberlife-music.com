import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { useTableContext } from '~/components/atoms/Table/Table.context';

import type { TableRowProps } from './TableRow.types';

const TableRow = ({ children, className, bordered }: TableRowProps) => {
  const { template } = useTableContext();

  const style = twMerge(
    clsx(
      `grid ${template} ${bordered && 'border-b border-gray-500'} gap-4 p-2`,
    ),
    className,
  );

  return <div className={style}>{children}</div>;
};

export default TableRow;
