import { Suspense } from "react";
import type { HandlerContentProps } from "./HandlerContent.types";

const HandlerContent = ({ children, loader, loading }: HandlerContentProps) => {
  if (loading) return <>{loader}</>;
  return <Suspense fallback={loader}>{children}</Suspense>;
};

export default HandlerContent;
