import { StrictMode } from 'react';
import { isbot } from 'isbot';
import { PassThrough } from 'stream';
import type { EntryContext } from '@remix-run/node';
import { createReadableStreamFromReadable } from '@remix-run/node';
import { RemixServer } from '@remix-run/react';
import { prerenderToNodeStream } from 'react-dom/static';
import reactHtmlParser from 'html-react-parser';
import { renderToPipeableStream } from 'react-dom/server';
import { prerenderStatic } from '@apollo/client/react/ssr';

import ApolloContext from '~/components/contexts/ApolloContext';
import { getClient } from '~/components/contexts/ApolloContext/ApolloContext';
import AnimationContextProvider from '~/components/contexts/AnimationContext/AnimationContext.provider';
import SecurityContextProvider from './components/contexts/SecurityContext/SecurityContext.provider';

const ABORT_DELAY = 5000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  return isbot(request.headers.get('user-agent'))
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext,
      )
    : handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext,
      );
}
const client = getClient();

function buildApp({
  request,
  remixContext,
  isBot,
  canAnimate,
}: {
  request: Request;
  remixContext: EntryContext;
  isBot: boolean;
  canAnimate: boolean;
}) {
  return (
    <StrictMode>
      <SecurityContextProvider isBot={isBot}>
        <ApolloContext client={client}>
          <AnimationContextProvider canAnimate={canAnimate}>
            <RemixServer context={remixContext} url={request.url} />
          </AnimationContextProvider>
        </ApolloContext>
      </SecurityContextProvider>
    </StrictMode>
  );
}

function renderWithApollo(app: React.ReactElement, diagnostics = false) {
  return prerenderStatic({
    tree: app,
    context: { client },
    renderFunction: prerenderToNodeStream,
    diagnostics,
  }).then(({ result }) => {
    const initialState = client.extract();
    const markup = (
      <>
        {reactHtmlParser(result)}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(
              initialState,
            ).replace(/</g, '\\u003c')}`,
          }}
        />
      </>
    );
    return markup;
  });
}

function streamMarkup(
  markup: React.ReactElement,
  responseStatusCode: number,
  responseHeaders: Headers,
) {
  let didError = false;

  return new Promise<Response>((resolve, reject) => {
    const { pipe, abort } = renderToPipeableStream(markup, {
      onShellReady() {
        const body = new PassThrough();
        responseHeaders.set('Content-Type', 'text/html');

        resolve(
          new Response(createReadableStreamFromReadable(body), {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode,
          }),
        );

        pipe(body);
      },
      onShellError(error: unknown) {
        reject(error);
      },
      onError(error: unknown) {
        didError = true;
        console.error(error);
      },
    });

    setTimeout(abort, ABORT_DELAY);
  });
}

function handleBotRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const app = buildApp({
    request,
    remixContext,
    isBot: true,
    canAnimate: false,
  });
  return renderWithApollo(app, false).then((markup) =>
    streamMarkup(markup, responseStatusCode, responseHeaders),
  );
}

function handleBrowserRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const app = buildApp({
    request,
    remixContext,
    isBot: false,
    canAnimate: true,
  });

  return renderWithApollo(app, true).then((markup) =>
    streamMarkup(markup, responseStatusCode, responseHeaders),
  );
}
