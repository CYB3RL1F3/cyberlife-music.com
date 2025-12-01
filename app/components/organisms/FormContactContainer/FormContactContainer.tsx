import { useContactMutation } from '~/hooks/mutations/useContactMutation';
import FormContact from '~/components/organisms/FormContact/FormContact';
import type { FormContactProps } from '~/components/organisms/FormContact/FormContact.types';

import type { FormContactContainerProps } from './FormContactContainer.types';

const subjectSuggestions = [
  'Collaboration request',
  'Dj set booking request',
  'Interview request',
  'Live act booking request',
  'Musical promotion request',
  'Musical promotion share',
  'Musical question',
  'Podcast request',
  'Premiere',
  'Production technical question',
  'Philosophy talk',
  'Remix request',
  'Release Request',
  'Track ID request',
  'Science computer question',
  'Just say hello and bring love',
];

const FormContactContainer = ({ onSuccess }: FormContactContainerProps) => {
  const [contact] = useContactMutation((data) => {
    if (data.contact) {
      onSuccess?.();
    }
  });

  const handleSubmit: FormContactProps['onSubmit'] = async (values) => {
    await contact(values);
  };

  return (
    <FormContact
      onSubmit={handleSubmit}
      subjectSuggestions={subjectSuggestions}
      defaultValues={{
        name: '',
        email: '',
        message: '',
        subject: '',
      }}
    />
  );
};

export default FormContactContainer;
