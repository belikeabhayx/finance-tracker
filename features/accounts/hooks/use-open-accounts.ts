import { create } from "zustand";

type OpenAccountState = {
  id?: string;
  isOpen: boolean;
  onOpen: (id: string) => void;
  onClose: () => void;
};

// Inside use-new-account.ts

export const useOpenAccount = create<OpenAccountState>((set) => ({
  id: undefined,
  isOpen: false,
  onOpen: (id:string) => set({ isOpen: true, id}),
  onClose: () => set({ isOpen: false, id:undefined }),
}));
