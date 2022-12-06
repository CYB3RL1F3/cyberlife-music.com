import Action from "~/components/atoms/Action";
import Thumbnail from "~/components/molecules/Thumbnail";
import ModalImage from "../ModalImage";
import type { PictureProps } from "./Picture.types";
import { useToggleState } from "~/hooks/useToggleState";

const Picture = ({ src, alt, variant }: PictureProps) => {
  const [isOpen, open, close] = useToggleState();
  const canOpen = !!src;
  return (
    <>
      <Thumbnail src={src} variant={variant}>
        <Action
          title={`open picture ${alt}`}
          disabled={!canOpen}
          onClick={open}
          className="w-full h-full"
        />
      </Thumbnail>
      <ModalImage isOpen={isOpen} onClose={close} alt={alt} src={src} />
    </>
  );
};

export default Picture;
