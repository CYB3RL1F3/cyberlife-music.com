import { useContext } from 'react';

import { ConfigContext } from './ConfigContext';
import type { ConfigContextValues } from './ConfigContext.types';

export const useConfigContext = () =>
  useContext<ConfigContextValues>(ConfigContext);
