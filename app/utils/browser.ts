export const isIe = (): boolean => {
  if (typeof window === "undefined") return false;
  const sAgent = window.navigator.userAgent;
  const idx = sAgent.indexOf("MSIE");

  if (idx > 0) return true;
  else if (!!navigator.userAgent.match(/Trident\/7\./)) return true;
  else return false;
};

export const isAndroid = (): boolean => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("android") > -1;
};

export const isFirefox = (): boolean => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("firefox") > -1;
};

export const isChrome = (): boolean => {
  return typeof window !== "undefined" && !!window.chrome;
};

export const supportCssRule = (rule: string, value = "xx") => {
  if (typeof window === "undefined") return false;
  if (!window.CSS) return false;
  if (!window.CSS.supports) return false;
  return (
    window.CSS.supports(rule, value) ||
    window.CSS.supports(`--webkit-${rule}`, value) ||
    (isFirefox() && window.CSS.supports(`--moz-${rule}`, value))
  );
};

export const isSupportedAudio = () => {
  if (typeof window === "undefined") return false;
  if (typeof window.Audio === "undefined") return false;
  return true;
};

export const isElementSupported = (tag: string) => {
  return (
    {}.toString.call(document.createElement(tag)) !==
    "[object HTMLUnknownElement]"
  );
};

export const supportsSelector = (selector: string) => {
  if (typeof document.createElement === "undefined") return false;
  const style = document.createElement("style");
  document.head.appendChild(style);
  if (!style.sheet) return false;
  try {
    style.sheet.insertRule(selector + "{}", 0);
  } catch (e) {
    return false;
  } finally {
    document.head.removeChild(style);
  }
  return true;
};

export const isSupportedSvg = () =>
  typeof document !== "undefined" &&
  !!(
    document.createElementNS &&
    document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
  );

export const isSupportedCss = () => {
  const requiredCssRules = [
    "mask-image",
    "mask-type",
    "transition",
    "box-shadow",
    "animation"
  ];

  const requiredSelectors = [
    "::-webkit-scrollbar-track",
    "::-webkit-scrollbar-thumb",
    "::-webkit-scrollbar-thumb:hover",
    "::-webkit-scrollbar-corner",
    "input:-webkit-autofill"
  ];
  const cssSupported = requiredCssRules.every((rule) => supportCssRule(rule));
  if (!cssSupported) return false;
  if (!supportCssRule("color", "--var(fake)")) return false;
  const selectorsSupported = requiredSelectors.every((rule) =>
    supportsSelector(rule)
  );
  if (!selectorsSupported && !isFirefox()) return false;
  return true;
};

export const isSupportedHtml = () => {
  const requiredHtmlTags = ["audio", "video", "nav", "article", "section"];

  const htmlSupported = requiredHtmlTags.every((rule) =>
    isElementSupported(rule)
  );
  if (!htmlSupported) return false;
  return true;
};

export const isSupported = () => {
  if (typeof window === "undefined" && typeof process !== "undefined")
    return true; // isServer
  if (typeof window === "undefined") return false;
  if (!window.localStorage) return false;
  if (isIe()) return false;
  if (!isSupportedHtml()) return false;
  if (!isSupportedCss()) return false;
  if (!isSupportedAudio()) return false;
  if (!isSupportedSvg()) return false;
  return true;
};
