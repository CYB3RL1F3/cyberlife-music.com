import { createContext } from 'react';

import type { PwaContextValues } from './PwaContext.types';

export const PwaContext = createContext<PwaContextValues>({});
