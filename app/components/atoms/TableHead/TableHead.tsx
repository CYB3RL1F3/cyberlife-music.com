import { cn } from '~/utils/cn';
import TableCell from '~/components/atoms/TableCell';
import { useTableContext } from '~/components/atoms/Table/Table.context';

import type { TableHeadProps } from './TableHead.types';

const TableHead = ({ columns, className }: TableHeadProps) => {
  const { template } = useTableContext();

  const headGridClass = cn(`grid ${template} gap-4 border-b-2 border-gray-200 p-2`, className);

  return (
    <div className={headGridClass}>
      {columns.map((column, index) =>
        column.length ? (
          <TableCell
            key={index}
            className="italic font-bold text-right text-gray-200"
          >
            {column}
          </TableCell>
        ) : null,
      )}
    </div>
  );
};

export default TableHead;
