export type FormOrderDownloadConfirmErrorProps = {
  id: string;
  email: string;
  onRetry: () => void;
  instagramLink?: string | null;
  error: string;
};
