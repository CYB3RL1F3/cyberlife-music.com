
  import { twMerge } from "tailwind-merge";
import type { TableCellProps } from "./TableCell.types";

  const TableCell = ({ children, className }: TableCellProps) => {
    const style = twMerge("text-right", className);
    return (
      <div className={style}>
        {children}
      </div>
    )
  }

  export default TableCell;
  