export type ModalState = {
  modalId: string | null;
  content: unknown;
};

export type ModalActions = {
  close: () => void;
  open: <T>(modalId: string, content?: T) => void;
  getContent: <T = unknown>() => T | null;
};

export type ModalStore = ModalState & ModalActions;
