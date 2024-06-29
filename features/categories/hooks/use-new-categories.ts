import { create } from "zustand";

type NewCategoriesState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

// Inside use-new-Categories.ts

export const useNewCategories = create<NewCategoriesState>((set) => ({
  isOpen: false,
  onOpen: () => {
    console.log("Opening new Categories"); // Debug log
    set({ isOpen: true });
  },
  onClose: () => set({ isOpen: false }),
}));
