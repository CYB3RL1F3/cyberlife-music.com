import Modal from "../Modal/Modal";
import type { ModalImageProps } from "./ModalImage.types";

const ModalImage = ({ src, alt, ...props }: ModalImageProps) => {
  return (
    <Modal {...props}>
      <div className="flex items-center justify-center min-w-[50vw] min-h-[50vh] w-fit h-fit">
        <img src={src} alt={alt} />
      </div>
    </Modal>
  );
};

export default ModalImage;
