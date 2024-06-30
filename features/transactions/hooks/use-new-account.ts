import { create } from "zustand";

type NewAccountState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

// Inside use-new-account.ts

export const useNewAccount = create<NewAccountState>((set) => ({
  isOpen: false,
  onOpen: () => {
    console.log("Opening new account"); // Debug log
    set({ isOpen: true });
  },
  onClose: () => set({ isOpen: false }),
}));
