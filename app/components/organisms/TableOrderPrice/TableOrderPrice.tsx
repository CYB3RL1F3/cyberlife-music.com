import { useMemo } from 'react';

import Table from '~/components/atoms/Table';
import { getTtcPrice } from '~/utils/business/purchase';
import { toFixed } from '~/utils/number';

import type { TableOrderPriceProps } from './TableOrderPrice.types';

const TableOrderPrice = ({ items }: TableOrderPriceProps) => {
  const totalPrice = useMemo(() => getTtcPrice(items), [items]);
  const template =
    'grid-cols-[5fr_1fr_1fr_2fr] lg:grid-cols-[5fr_1fr_1fr_1fr_2fr]';
  return (
    <Table template={template}>
      <Table.Row className="border-t-2 border-gray-200">
        <Table.Cell className="min-w-44">TOTAL TTC</Table.Cell>
        <Table.Cell className="max-md:hidden">VAT 20% </Table.Cell>
        <Table.Cell> </Table.Cell>
        <Table.Cell>{toFixed(totalPrice)} €</Table.Cell>
        <Table.Cell className="min-w-[80px]"> </Table.Cell>
      </Table.Row>
    </Table>
  );
};

export default TableOrderPrice;
