import { useContext } from 'react';

import { SecurityContext } from './SecurityContext';

export const useSecurityContext = () => useContext(SecurityContext);
