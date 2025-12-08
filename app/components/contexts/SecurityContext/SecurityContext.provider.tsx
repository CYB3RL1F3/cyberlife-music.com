import { useState, useEffect } from 'react';
import type { SecurityContextProviderProps } from './SecurityContext.types';
import { SecurityContext } from './SecurityContext';
import { useMouseMoveEvent } from '~/hooks/events/useMouseMoveEvent';

const SecurityContextProvider = ({
  isBot,
  children,
}: SecurityContextProviderProps) => {
  const [isBotDetected, setIsBotDetected] = useState(isBot);
  const [hasMouseMovement, setHasMouseMovement] = useState(false);

  useMouseMoveEvent(() => {
    if (isBotDetected) {
      return;
    }
    setHasMouseMovement(true);
  });

  useEffect(() => {
    // Check user agent for common bot patterns
    if (isBot) return;
    const userAgent = navigator.userAgent.toLowerCase();
    const botPatterns = [
      /bot/i,
      /crawler/i,
      /spider/i,
      /crawling/i,
      /googlebot/i,
      /bingbot/i,
      /slurp/i,
      /duckduckbot/i,
      /baiduspider/i,
      /yandexbot/i,
      /facebookexternalhit/i,
      /twitterbot/i,
      /rogerbot/i,
      /linkedinbot/i,
      /embedly/i,
      /quora link preview/i,
      /showyoubot/i,
      /outbrain/i,
      /pinterest/i,
      /slackbot/i,
      /vkshare/i,
      /w3c_validator/i,
      /redditbot/i,
      /applebot/i,
      /whatsapp/i,
      /flipboard/i,
      /tumblr/i,
      /bitlybot/i,
      /skypeuripreview/i,
      /nuzzel/i,
      /discordbot/i,
      /qwantify/i,
      /pinterestbot/i,
      /bitrix link preview/i,
      /xing-contenttabreceiver/i,
      /chrome-lighthouse/i,
      /headlesschrome/i,
      /phantomjs/i,
      /selenium/i,
      /webdriver/i,
      /lighthouse/i,
    ];

    const isBotUA = botPatterns.some((pattern) => pattern.test(userAgent));

    const isAutomation =
      window.navigator.webdriver ||
      !!(window as any).callPhantom ||
      !!(window as any)._phantom ||
      !!(window as any).__nightmare;

    const hasTypicalBrowserFeatures =
      'onload' in window &&
      'localStorage' in window &&
      'sessionStorage' in window;

    const detectedBot = isBotUA || isAutomation || !hasTypicalBrowserFeatures;

    setIsBotDetected(detectedBot);
  }, [isBot]);

  console.log('SecurityContextProvider - isBotDetected:', isBotDetected);

  return (
    <SecurityContext.Provider
      value={{
        isBot: isBotDetected || !hasMouseMovement,
      }}
    >
      {children}
    </SecurityContext.Provider>
  );
};

export default SecurityContextProvider;
