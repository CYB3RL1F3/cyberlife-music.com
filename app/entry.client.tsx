import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';

import AnimationContextProvider from '~/components/contexts/AnimationContext/AnimationContext.provider';
import ApolloContext, {
  getClient,
} from '~/components/contexts/ApolloContext/ApolloContext';
import SecurityContextProvider from '~/components/contexts/SecurityContext/SecurityContext.provider';

function hydrate() {
  const client = getClient();

  return startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <SecurityContextProvider>
          <ApolloContext client={client}>
            <AnimationContextProvider canAnimate>
              <RemixBrowser />
            </AnimationContextProvider>
          </ApolloContext>
        </SecurityContextProvider>
      </StrictMode>,
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}
