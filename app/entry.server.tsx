import { PassThrough } from "stream";
import isbot from "isbot";
import type { EntryContext } from "@remix-run/node";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToPipeableStream } from "react-dom/server";
import { getDataFromTree } from "@apollo/client/react/ssr";
import ApolloContext from "./components/contexts/ApolloContext";
import { getClient } from "./components/contexts/ApolloContext/ApolloContext";
import { StrictMode } from "react";
import AnimationContextProvider from "./components/contexts/AnimationContext/AnimationContext.provider";

const ABORT_DELAY = 5000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return isbot(request.headers.get("user-agent"))
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      )
    : handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      );
}
const client = getClient();

function handleBotRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const App = (
    <StrictMode>
      <ApolloContext client={client}>
        <AnimationContextProvider>
          <RemixServer context={remixContext} url={request.url} />
        </AnimationContextProvider>
      </ApolloContext>
    </StrictMode>
  );
  return getDataFromTree(App).then(() => {
    let didError = false;
    const initialState = client.extract();
    const markup = (
      <>
        {App}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(
              initialState
            ).replace(/</g, "\\u003c")}` // The replace call escapes the < character to prevent cross-site scripting attacks that are possible via the presence of </script> in a string literal
          }}
        />
      </>
    );
    return new Promise((resolve, reject) => {
      const { pipe, abort } = renderToPipeableStream(markup, {
        onShellReady() {
          const body = new PassThrough();

          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(createReadableStreamFromReadable(body), {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          didError = true;

          console.error(error);
        }
      });

      setTimeout(abort, ABORT_DELAY);
    });
  });
}

function handleBrowserRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const App = (
    <StrictMode>
      <ApolloContext client={client}>
        <AnimationContextProvider canAnimate>
          <RemixServer context={remixContext} url={request.url} />
        </AnimationContextProvider>
      </ApolloContext>
    </StrictMode>
  );

  return getDataFromTree(App).then(() => {
    let didError = false;
    const initialState = client.extract();
    const markup = (
      <>
        {App}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(
              initialState
            ).replace(/</g, "\\u003c")}` // The replace call escapes the < character to prevent cross-site scripting attacks that are possible via the presence of </script> in a string literal
          }}
        />
      </>
    );
    return new Promise((resolve, reject) => {
      const { pipe, abort } = renderToPipeableStream(markup, {
        onShellReady() {
          const body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(createReadableStreamFromReadable(body), {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          );

          pipe(body);
        },
        onShellError(err: unknown) {
          reject(err);
        },
        onError(error: unknown) {
          didError = true;

          console.error(error);
        }
      });

      setTimeout(abort, ABORT_DELAY);
    });
  });
}
