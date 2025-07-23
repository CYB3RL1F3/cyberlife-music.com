import { twMerge } from "tailwind-merge";
import type { TableContextType, TableProps } from "./Table.types";
import TableHead from "~/components/atoms/TableHead";
import TableRow from "~/components/atoms/TableRow";
import TableCell from "~/components/atoms/TableCell";
import { TableContext } from "./Table.context";

const Table = ({ children, className, template = 'grid-cols-[1fr_1fr_1fr_1fr]' }: TableProps) => {
  return (
    <TableContext.Provider value={{ template }}>
      <div className={twMerge("grid w-full", className)}>{children}</div>
    </TableContext.Provider>
  )
}

Table.Head = TableHead;
Table.Row = TableRow;
Table.Cell = TableCell;

export default Table;
