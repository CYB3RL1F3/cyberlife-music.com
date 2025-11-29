import Modal from '~/components/organisms/Modal/Modal';
import type { ModalImageProps } from './ModalImage.types';

const ModalImage = ({ src, alt, ...props }: ModalImageProps) => {
  return (
    <Modal {...props} className="w-fit h-fit">
      <div className="flex items-center justify-center w-fit h-fit">
        <img
          src={src}
          alt={alt}
          style={{
            width: 'auto',
            maxWidth: '80vw',
            height: 'auto',
            maxHeight: '80vh',
          }}
        />
      </div>
    </Modal>
  );
};

export default ModalImage;
