import { memo } from 'react';
import ReactDOM from 'react-dom';

import { useDomElement } from '~/hooks/misc/useDomElement';
import type { PortalProps } from './Portal.types';

const Portal = memo(({ children, id }: PortalProps) => {
  const root = useDomElement(`#${id}`);
  if (!root) return null;
  return ReactDOM.createPortal(children, root);
});

Portal.displayName = 'Portal';

export default Portal;
