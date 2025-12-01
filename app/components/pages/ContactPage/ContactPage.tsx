import { useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import FormContactContainer from '~/components/organisms/FormContactContainer';
import { useToggleState } from '~/hooks/misc/useToggleState';
import FormContactSuccess from '~/components/organisms/FormContactSuccess/FormContactSuccess';
import HandlerContent from '~/components/molecules/HandlerContent';

const ContactPage = () => {
  const [isSuccess, showSuccess, hideSuccess] = useToggleState();
  const currentPageElement = useMemo(() => {
    if (isSuccess) {
      return <FormContactSuccess onHide={hideSuccess} />;
    }
    return <FormContactContainer onSuccess={showSuccess} />;
  }, [hideSuccess, isSuccess, showSuccess]);

  return (
    <HandlerContent>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isSuccess ? 'success' : 'form'}
          initial={{ opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {currentPageElement}
        </motion.div>
      </AnimatePresence>
    </HandlerContent>
  );
};

export default ContactPage;
