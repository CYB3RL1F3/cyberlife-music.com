import ModalImage from '~/components/organisms/ModalImage';
import { useImageModal } from '~/hooks/misc/useImageModal';

const ModalImageContainer = () => {
  const { isOpen, image, close } = useImageModal();
  if (!image) return null;
  return <ModalImage src={image} alt="" isOpen={isOpen} onClose={close} />;
};

export default ModalImageContainer;
