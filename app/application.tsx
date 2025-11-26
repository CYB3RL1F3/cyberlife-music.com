import { ToastContainer } from 'react-toastify';
import {
  LiveReload,
  Scripts,
  ScrollRestoration,
  useLocation,
} from '@remix-run/react';
import { domAnimation, LazyMotion } from 'framer-motion';
import type { ReactNode } from 'react';

import Layout from './components/layouts/Layout';
import DisplayInfosContainer from './components/organisms/DisplayInfosContainer/DisplayInfosContainer';
import ContainerScrollPage from './components/organisms/ContainerScrollPage/ContainerScrollPage';
import AudioContainer from './components/molecules/AudioContainer';
import { ClientOnly } from './components/atoms/ClientOnly/ClientOnly';
import PageDetailHeaderPortal from './components/molecules/PageDetailHeaderPortal/PageDetailHeaderPortal';
import ConfigContextProvider from './components/contexts/ConfigContext/ConfigContext.provider';
import NotificationContextProvider from './components/contexts/NotificationContext';
import FooterMobile from './components/organisms/FooterMobile';
import PwaContextProvider from './components/contexts/PwaContext';
import type { Config } from './components/contexts/ConfigContext/ConfigContext.types';
import { isSupported } from './utils/browser';
import NotSupportedPage from './components/pages/NotSupportedPage';
import NoScript from './components/organisms/NoScript';
import { useRemixNavigationPostMessage } from './hooks/misc/useRemixNavigationPostMessage';
import ApplicationOutlet from './components/organisms/ApplicationOutlet';

export type ApplicationProps = {
  config: Config;
  children?: ReactNode;
};

const Application = ({ config, children }: ApplicationProps) => {
  const location = useLocation();

  useRemixNavigationPostMessage(location);

  const isAppSupported = isSupported();

  if (!isAppSupported && typeof window !== 'undefined') {
    return <NotSupportedPage />;
  }

  return (
    <>
      <LazyMotion features={domAnimation}>
        <ConfigContextProvider config={config}>
          <PwaContextProvider>
            <NotificationContextProvider>
              <Layout>
                <DisplayInfosContainer />
                <div className="relative">
                  <div className="absolute z-10 w-full">
                    <PageDetailHeaderPortal.Container />
                  </div>
                  <ContainerScrollPage>
                    <NoScript />
                    <ApplicationOutlet>{children}</ApplicationOutlet>
                    <FooterMobile />
                  </ContainerScrollPage>
                </div>
                <ClientOnly>{() => <AudioContainer />}</ClientOnly>
              </Layout>
              <ToastContainer
                role="alert"
                position="bottom-left"
                theme="colored"
                autoClose={6000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
              />
            </NotificationContextProvider>
          </PwaContextProvider>
        </ConfigContextProvider>
      </LazyMotion>
      <ScrollRestoration /> <Scripts />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.ENV = ${JSON.stringify(config)}`,
        }}
      />
      <LiveReload />
    </>
  );
};

export default Application;
