import Modal from "~/components/organisms/Modal/Modal";
import type { ModalImageProps } from "./ModalImage.types";

const ModalImage = ({ src, alt, ...props }: ModalImageProps) => {
  return (
    <Modal {...props}>
      <div className="flex items-center justify-center w-fit h-fit max-h-[90vh] max-w-[80vw]">
        <img src={src} alt={alt} />
      </div>
    </Modal>
  );
};

export default ModalImage;
