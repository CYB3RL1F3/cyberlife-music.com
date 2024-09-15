import { DownloadOrderTracks } from "~/types/gql/DownloadOrderTracks";

  export type FormOrderDownloadConfirmContainerProps = {
    id: string;
    token: string;
    onSuccess: (value: DownloadOrderTracks['downloadOrderTracks']) => void;
    onError: (error: Error, email: string) => void;
  }
  