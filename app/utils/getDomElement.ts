export const getDomElement = (selector: string): Promise<Element> =>
  new Promise((resolve) => {
    const element = window.document.querySelector(selector);
    if (element) {
      return resolve(element);
    }

    const observer = new MutationObserver(() => {
      const element = window.document.querySelector(selector);
      if (element) {
        resolve(element);
        observer.disconnect();
      }
    });

    observer.observe(window.document.body, {
      childList: true,
      subtree: true
    });
  });
