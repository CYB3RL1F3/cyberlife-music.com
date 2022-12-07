import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

import ApolloContext, {
  getClient
} from "./components/contexts/ApolloContext/ApolloContext";
import PlayerContextProvider from "./components/contexts/PlayerContext";

function hydrate() {
  const client = getClient();

  return startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <ApolloContext client={client}>
          <PlayerContextProvider>
            <RemixBrowser />
          </PlayerContextProvider>
        </ApolloContext>
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
