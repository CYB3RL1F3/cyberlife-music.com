import type { HandlerContentProps } from "./HandlerContent.types";

const HandlerContent = ({ children, loader, loading }: HandlerContentProps) => {
  if (loading) return <>{loader}</>;
  return <>{children}</>;
};

export default HandlerContent;
