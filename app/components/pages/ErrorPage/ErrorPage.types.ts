import type { ReactNode } from "react";

export type ErrorPageProps = {
  code: 404 | 500;
  message?: ReactNode;
  extra?: ReactNode;
};
