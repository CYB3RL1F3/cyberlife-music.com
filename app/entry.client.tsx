import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

import { ApolloProvider } from "@apollo/client";
import { getClient } from "./components/contexts/ApolloContext/ApolloContext";

function hydrate() {
  const client = getClient();

  return startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <ApolloProvider client={client}>
          <RemixBrowser />
        </ApolloProvider>
      </StrictMode>
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
