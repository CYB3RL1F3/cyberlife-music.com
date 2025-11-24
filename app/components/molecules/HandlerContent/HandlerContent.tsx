import type { HandlerContentProps } from './HandlerContent.types';

const HandlerContent = ({ children, loader, loading }: HandlerContentProps) => {
  if (loading) return <div className="w-full h-full">{loader}</div>;
  return <div className="w-full h-full">{children}</div>;
};

export default HandlerContent;
