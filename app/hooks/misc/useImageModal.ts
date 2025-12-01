import useModalStore from '~/hooks/stores/modals/useModalStore';

const IMAGE_MODAL_ID = 'image_modal';

export const useImageModal = () => {
  const { modalId, open, close, getContent } = useModalStore();

  const handleOpenImageModal = (src: string) => {
    open<string>(IMAGE_MODAL_ID, src);
  };

  const image = getContent<string>();
  const isOpen = modalId === IMAGE_MODAL_ID && !!image;

  return {
    isOpen,
    image,
    open: handleOpenImageModal,
    close,
  };
};
