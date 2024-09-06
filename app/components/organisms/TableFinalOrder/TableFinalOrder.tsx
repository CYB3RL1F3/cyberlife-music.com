import Table from '~/components/atoms/Table';
import type { TableFinalOrderProps } from './TableFinalOrder.types';
import { useMemo } from 'react';
import { getTtcPrice } from '~/utils/business/purchase';

const TableFinalOrder = ({ items, carrier }: TableFinalOrderProps) => {
  const totalPrice = useMemo(() => getTtcPrice(items), [items]);
  return (
    <Table template="grid-cols-[4fr_1fr]">
      <Table.Row>
        <Table.Cell>Order TTC (VAT 20%)</Table.Cell>
        <Table.Cell>{totalPrice}€</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Shipping fee</Table.Cell>
        <Table.Cell>{carrier.price}€</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Total</Table.Cell>
        <Table.Cell>{totalPrice + carrier.price}€</Table.Cell>
      </Table.Row>
    </Table>
  );
};

export default TableFinalOrder;
