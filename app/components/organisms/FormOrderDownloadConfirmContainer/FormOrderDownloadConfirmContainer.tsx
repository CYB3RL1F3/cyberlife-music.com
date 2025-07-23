import ButtonSubmit from '~/components/molecules/ButtonSubmit';
import FormOrderDownloadConfirm from '../FormOrderDownloadConfirm/FormOrderDownloadConfirm';
import type { FormOrderDownloadConfirmContainerProps } from './FormOrderDownloadConfirmContainer.types';
import { FormOrderDownloadConfirmProps } from '../FormOrderDownloadConfirm/FormOrderDownloadConfirm.types';
import { MdSend } from 'react-icons/md';
import { useState } from 'react';
import { useDownloadOrderTracksMutation } from '~/hooks/mutations/useDownloadOrderTracksMutation';
import { DownloadOrderTracks } from '~/types/gql/DownloadOrderTracks';

const FormOrderDownloadConfirmContainer = ({
  id,
  token,
  onSuccess,
  onError,
}: FormOrderDownloadConfirmContainerProps) => {
  const [email, setEmail] = useState('');
  const [downloadOrderTracks, { loading }] = useDownloadOrderTracksMutation(
    (data) => {
      onSuccess(data?.downloadOrderTracks);
    },
    (error) => {
      console.log('error', error);
      onError(error, email);
    },
  );

  const handleSubmit: FormOrderDownloadConfirmProps['onSubmit'] = async (
    values,
  ) => {
    setEmail(values.email);
    downloadOrderTracks({
      orderId: id,
      token,
      email: values.email,
    });
  };

  return (
    <FormOrderDownloadConfirm
      onSubmit={handleSubmit}
      footer={() => (
        <div className="flex justify-end w-full">
          <ButtonSubmit rightIcon={<MdSend />} loading={false}>
            Get audio files
          </ButtonSubmit>
        </div>
      )}
    />
  );
};

export default FormOrderDownloadConfirmContainer;
