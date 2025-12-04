import { createContext } from 'react';

import type { SecurityContextValues } from './SecurityContext.types';

export const SecurityContext = createContext<SecurityContextValues>({
  isBot: false,
});
