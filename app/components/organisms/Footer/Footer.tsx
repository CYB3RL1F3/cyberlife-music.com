import { AnimatePresence, motion } from 'framer-motion';

import FooterAnchorsInfosContainer from '~/components/organisms/FooterAnchorsInfosContainer';
import FooterAnchorsCopyrights from '~/components/organisms/FooterAnchorsCopyrights/FooterAnchorsCopyrights';
import PlayerWidgetMobile from '~/components/organisms/PlayerWidgetMobile/PlayerWidgetMobile';
import ClientOnly from '~/components/atoms/ClientOnly';

const Footer = () => {
  return (
    <>
      <AnimatePresence>
        <motion.footer
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.25, delay: 0.25, ease: 'easeInOut' }}
          className="items-center justify-between hidden w-screen h-12 px-6 md:flex"
        >
          <FooterAnchorsCopyrights />
          <FooterAnchorsInfosContainer />
        </motion.footer>
      </AnimatePresence>
      <ClientOnly>{() => <PlayerWidgetMobile />}</ClientOnly>
    </>
  );
};

export default Footer;
