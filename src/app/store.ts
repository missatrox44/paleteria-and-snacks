import { create } from 'zustand';

// Define the shape of the store's state
interface Store {
  language: string;
  setLanguage: (lang: string) => void;
}

// Create the store and pass the type to Zustand's `create` function
const useStore = create<Store>((set) => ({
  language: 'en',
  setLanguage: (lang: string) => set({ language: lang }),
}));

export default useStore;
