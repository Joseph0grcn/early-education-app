import { create } from 'zustand';

export const useAppStore = create((set) => ({
  stars: 0,
  addStar: () => set((state) => ({ stars: state.stars + 1 })),
  resetStars: () => set({ stars: 0 }),
}));
