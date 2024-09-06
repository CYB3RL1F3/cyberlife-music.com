
  import Table from "~/components/atoms/Table";
import type { TableOrderPriceProps } from "./TableOrderPrice.types";
import { getTtcPrice } from "~/utils/business/purchase";
import { useMemo } from "react";
import { toFixed } from "~/utils/number";

  const TableOrderPrice = ({ items }: TableOrderPriceProps) => {
    const totalPrice = useMemo(() => getTtcPrice(items), [items]);
    const template = 'grid-cols-[5fr_1fr_1fr_1fr_2fr]'
    return (
      <Table template={template}>
        <Table.Row className="border-t-2 border-gray-200">
          <Table.Cell>TOTAL TTC</Table.Cell>
          <Table.Cell>VAT 20% </Table.Cell>
          <Table.Cell>{' '}</Table.Cell>
          <Table.Cell>{toFixed(totalPrice)}€</Table.Cell>
          <Table.Cell>{' '}</Table.Cell>
        </Table.Row>
      </Table>
    );
  }

  export default TableOrderPrice;
  