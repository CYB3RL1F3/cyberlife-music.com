import type { HandlerContentProps } from "./HandlerContent.types";

const HandlerContent = ({ children, loader, loading }: HandlerContentProps) => {
  console.log("LOADING >>> ", loading);
  if (typeof window !== "undefined") console.log(window.__APOLLO_STATE);
  if (loading) return <>{loader}</>;
  return <>{children}</>;
};

export default HandlerContent;
