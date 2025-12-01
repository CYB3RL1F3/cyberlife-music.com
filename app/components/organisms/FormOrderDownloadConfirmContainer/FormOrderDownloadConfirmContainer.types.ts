import { DownloadOrderTracksMutation } from '~/types/gql';

export type FormOrderDownloadConfirmContainerProps = {
  id: string;
  token: string;
  onSuccess: (
    value: DownloadOrderTracksMutation['downloadOrderTracks'],
  ) => void;
  onError: (error: Error, email: string) => void;
};
