import { create } from 'zustand';

import { ModalStore } from './useModalStore.types';

export const useModalStore = create<ModalStore>((set, get) => ({
  modalId: null,
  content: null,
  getContent: <T = unknown>() => {
    return get().content as T | null;
  },
  open: <T>(modalId: string, content?: T) => set({ modalId, content }),
  close: () => set({ modalId: null, content: null }),
}));

export default useModalStore;
