import Table from '~/components/atoms/Table';
import type { TableOrderResumeProps } from './TableOrderResume.types';
import { getHtPrice } from '~/utils/business/purchase';
import { useMemo } from 'react';
import OrderItemActions from '../OrderItemActions';
import { toFixed } from '~/utils/number';

const TableOrderResume = ({ items, readonly }: TableOrderResumeProps) => {
  const totalPrice = useMemo(() => getHtPrice(items), [items]);
  const template = readonly
    ? 'grid-cols-[5fr_1fr_1fr_1fr]'
    : 'grid-cols-[5fr_1fr_1fr_1fr_2fr]';
  return (
    <Table template={template}>
      <Table.Head columns={['Item', 'Unit price', 'Quantity', 'Total', '']} />
      {items.map((item) => (
        <Table.Row bordered key={item.id}>
          <Table.Cell>{item.release?.name}</Table.Cell>
          <Table.Cell>{toFixed(item.release.price)}€</Table.Cell>
          <Table.Cell>{item.quantity}x</Table.Cell>
          <Table.Cell>{(item.release.price || 0) * item.quantity}€</Table.Cell>
          {!readonly && (
            <Table.Cell>
              <OrderItemActions item={item} />
            </Table.Cell>
          )}
        </Table.Row>
      ))}
      <Table.Row className="border-t-2 border-gray-200">
        <Table.Cell>TOTAL HT</Table.Cell>
        <Table.Cell> </Table.Cell>
        <Table.Cell> </Table.Cell>
        <Table.Cell>{toFixed(totalPrice)}€</Table.Cell>
        {!readonly && <Table.Cell> </Table.Cell>}
      </Table.Row>
    </Table>
  );
};

export default TableOrderResume;
