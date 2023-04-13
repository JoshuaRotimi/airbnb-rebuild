import { create } from "zustand";

interface LoginModalStore {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}

const useLoginModal = create<LoginModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useLoginModal;
