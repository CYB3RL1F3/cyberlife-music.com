import { useState } from 'react';
import { MdSend } from 'react-icons/md';
import ButtonSubmit from '~/components/molecules/ButtonSubmit';
import FormOrderDownloadConfirm from '~/components/organisms/FormOrderDownloadConfirm/FormOrderDownloadConfirm';
import { FormOrderDownloadConfirmProps } from '~/components/organisms/FormOrderDownloadConfirm/FormOrderDownloadConfirm.types';
import { useDownloadOrderTracksMutation } from '~/hooks/mutations/useDownloadOrderTracksMutation';
import Spinner from '~/components/atoms/Spinner';
import type { FormOrderDownloadConfirmContainerProps } from './FormOrderDownloadConfirmContainer.types';

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
          <ButtonSubmit
            rightIcon={loading ? <Spinner variant="md" /> : <MdSend />}
            loading={loading}
          >
            Get audio files
          </ButtonSubmit>
        </div>
      )}
    />
  );
};

export default FormOrderDownloadConfirmContainer;
