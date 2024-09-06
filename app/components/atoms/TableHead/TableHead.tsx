
  import clsx from "clsx";
import TableCell from "../TableCell";
import type { TableHeadProps } from "./TableHead.types";
  import { twMerge } from "tailwind-merge";
import { useTableContext } from "../Table/Table.context";

  const TableHead = ({ columns, className }: TableHeadProps) => {
    const { template } = useTableContext();

    const headGridClass = twMerge(clsx(`grid ${template} gap-4 border-b-2 border-gray-200 p-2`), className);

    return (
      <div className={headGridClass}>
        {columns.map((column, index) => (
          <TableCell key={index} className="italic font-bold text-right text-gray-200">
            {column}
          </TableCell>
        ))}
      </div>
    );
  }

  export default TableHead;
  