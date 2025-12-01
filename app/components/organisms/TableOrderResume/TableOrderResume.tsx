import { useMemo } from 'react';

import Table from '~/components/atoms/Table';
import { getHtPrice } from '~/utils/business/purchase';
import OrderItemActions from '~/components/organisms/OrderItemActions';
import { toFixed } from '~/utils/number';

import type { TableOrderResumeProps } from './TableOrderResume.types';

const TableOrderResume = ({ items, readonly }: TableOrderResumeProps) => {
  const totalPrice = useMemo(() => getHtPrice(items), [items]);
  const template = readonly
    ? 'grid-cols-[5fr_3rem_3rem] lg:grid-cols-[5fr_6rem_4rem_4rem]'
    : 'grid-cols-[5fr_3rem_3rem_2fr] lg:grid-cols-[5fr_6rem_4rem_1fr_2fr]';
  return (
    <Table template={template}>
      <Table.Head
        className="max-md:hidden"
        columns={['Item', 'Unit price', 'Quantity', 'Total', '']}
      />
      <Table.Head
        className="visible md:hidden"
        columns={['Item', 'Qty', 'Price', '']}
      />
      {items.map((item) => (
        <Table.Row bordered key={item.id}>
          <Table.Cell className="min-w-44">{item.release?.name}</Table.Cell>
          <Table.Cell className="hidden lg:block">
            {toFixed(item.release.price)} €
          </Table.Cell>
          <Table.Cell>{item.quantity}x</Table.Cell>
          <Table.Cell>
            {toFixed((item.release.price || 0) * item.quantity)} €
          </Table.Cell>
          {!readonly && (
            <Table.Cell className="min-w-[80px]">
              <OrderItemActions item={item} />
            </Table.Cell>
          )}
        </Table.Row>
      ))}
      <Table.Row className="border-t-2 border-gray-200">
        <Table.Cell className="min-w-44">TOTAL HT</Table.Cell>
        <Table.Cell className="hidden lg:block"> </Table.Cell>
        <Table.Cell> </Table.Cell>
        <Table.Cell>{toFixed(totalPrice)} €</Table.Cell>
        {!readonly && <Table.Cell className="min-w-[80px]"> </Table.Cell>}
      </Table.Row>
    </Table>
  );
};

export default TableOrderResume;
