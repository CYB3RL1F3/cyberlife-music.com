import { parseHtml } from '~/utils/html';

import type { HtmlReaderProps } from './HtmlReader.types';

const HtmlReader = ({ value, className }: HtmlReaderProps) => {
  const data = value && parseHtml(value);
  return <article className={className}>{data}</article>;
};

export default HtmlReader;
