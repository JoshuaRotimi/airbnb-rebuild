import { create } from "zustand";

interface RegisterModalStore {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}

const useRegisterModal = create<RegisterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;
