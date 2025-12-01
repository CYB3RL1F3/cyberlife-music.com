import { createContext, useContext } from 'react';

import { TableContextType } from './Table.types';

export const TableContext = createContext<TableContextType>({
  template: '1fr',
});

export const useTableContext = () => useContext(TableContext);
