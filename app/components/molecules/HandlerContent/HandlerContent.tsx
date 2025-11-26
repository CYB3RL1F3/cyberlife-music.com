import Loader from '../Loader';
import type { HandlerContentProps } from './HandlerContent.types';

export const defaultLoader = <Loader message="Loading..." />;

const HandlerContent = ({
  children,
  loader = defaultLoader,
  loading,
}: HandlerContentProps) => {
  return (
    <div className="w-full h-full">{loading && loader ? loader : children}</div>
  );
};

export default HandlerContent;
