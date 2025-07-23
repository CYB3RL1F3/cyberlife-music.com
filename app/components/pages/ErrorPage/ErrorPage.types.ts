import type { ReactNode } from "react";

export type ErrorPageProps = {
  code: 404 | 500 | 400 | 403 | 401 | 502 | 503 | 429;
  message?: ReactNode;
  extra?: ReactNode;
};
