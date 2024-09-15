import Table from '~/components/atoms/Table';
import type { TableFinalOrderProps } from './TableFinalOrder.types';
import { useMemo } from 'react';
import { getTtcPrice } from '~/utils/business/purchase';
import { toFixed } from '~/utils/number';

const TableFinalOrder = ({ items, carrier }: TableFinalOrderProps) => {
  const totalPrice = useMemo(() => getTtcPrice(items), [items]);
  return (
    <Table template="grid-cols-[4fr_3rem_3rem] lg:grid-cols-[4fr_6rem_4rem_4rem]">
      <Table.Row>
        <Table.Cell className="min-w-44">Order TTC (VAT 20%)</Table.Cell>
        <Table.Cell className="max-lg:hidden"> </Table.Cell>
        <Table.Cell> </Table.Cell>
        <Table.Cell>{toFixed(totalPrice)} €</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell className="min-w-44">Shipping fee</Table.Cell>
        <Table.Cell className="max-lg:hidden"> </Table.Cell>
        <Table.Cell> </Table.Cell>
        <Table.Cell>{toFixed(carrier.price)} €</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell className="min-w-44">Total</Table.Cell>
        <Table.Cell className="max-lg:hidden"> </Table.Cell>
        <Table.Cell> </Table.Cell>
        <Table.Cell>{toFixed(totalPrice + carrier.price)} €</Table.Cell>
      </Table.Row>
    </Table>
  );
};

export default TableFinalOrder;
