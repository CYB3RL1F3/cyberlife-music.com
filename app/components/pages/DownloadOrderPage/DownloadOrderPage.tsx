import { AnimatePresence } from 'framer-motion';
import type { DownloadOrderPageProps } from './DownloadOrderPage.types';
import FormHeading from '~/components/organisms/FormHeading';
import FormOrderDownloadConfirmContainer, {
  FormOrderDownloadConfirmContainerProps,
} from '~/components/organisms/FormOrderDownloadConfirmContainer';
import { useState } from 'react';
import { DownloadOrderTracks } from '~/types/gql/DownloadOrderTracks';
import { useInfosQuery } from '~/hooks/queries/useInfosQuery';
import FormOrderDownloadConfirmError from '~/components/organisms/FormOrderDownloadConfirmError';
import ListOrderDownload from '~/components/organisms/ListOrderDownload';

const DownloadOrderPage = ({ id, token }: DownloadOrderPageProps) => {
  const [values, setValues] =
    useState<DownloadOrderTracks['downloadOrderTracks']>();
  const [error, setError] = useState<Error>();
  const [email, setEmail] = useState('');
  const handleRetry = () => {
    setError(undefined);
  };

  const handleSuccess: FormOrderDownloadConfirmContainerProps['onSuccess'] = (
    value,
  ) => {
    setError(undefined);
    setValues(value);
  };

  const handleError: FormOrderDownloadConfirmContainerProps['onError'] = (
    error,
    email,
  ) => {
    setValues(undefined);
    setError(error);
    setEmail(email);
  };

  const infos = useInfosQuery();

  const instagram = infos.data?.infos?.instagram;

  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col items-end justify-end w-full">
        <FormHeading
          title="Download your audio files!"
          description={<>Get the digital wav files of your order.</>}
        />
        <div className="flex justify-end w-full">
          {!values && !error && (
            <div className="w-2/3">
              <FormOrderDownloadConfirmContainer
                id={id}
                token={token}
                onSuccess={handleSuccess}
                onError={handleError}
              />
            </div>
          )}
          {!values && error && (
            <FormOrderDownloadConfirmError
              onRetry={handleRetry}
              id={id}
              instagramLink={instagram!}
              email={email}
              error={error.message}
            />
          )}
          {values && !error && <ListOrderDownload download={values} />}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default DownloadOrderPage;
