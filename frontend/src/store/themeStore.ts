// store/themeStore.ts
import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (mode: Theme) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: (localStorage.getItem('theme') as Theme) || 'light',
  
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      return { theme: newTheme };
    }),

  setTheme: (mode: Theme) => {
    localStorage.setItem('theme', mode);
    document.documentElement.classList.toggle('dark', mode === 'dark');
    set({ theme: mode });
  },
}));
