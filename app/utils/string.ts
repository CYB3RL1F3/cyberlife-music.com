export const extractEmail = (text: string) => {
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  return text.match(emailRegex);
};

export const extractPhoneNumber = (text: string) => {
  const phoneRegex = /(\+?\d{1,3}[- ]?)?\d{10}/g;
  return text.match(phoneRegex);
};

export const extractUrls = (text: string) => {
  const urlRegex = /https?:\/\/[^\s]+/g;
  return text.match(urlRegex);
};

export const generateRandomString = () => {
  return shuffleString(
    `pxldub_${reverseString(Math.random().toString(36).substring(2, 15))}`,
  );
};

export const reverseString = (value: string) => {
  return value.split('').reverse().join('');
};

export const shuffleString = (value: string) => {
  const array = value.split('');
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join('');
};
