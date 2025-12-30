import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ClientStore {
  identifier: string | null; // UUID unique généré une fois
  name: string | null;
  generateIdentifier: () => string;
  setIdentifier: (identifier: string) => void;
  setName: (name: string) => void;
}

/**
 * Génère un UUID v4 simple
 */
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const useClientStore = create<ClientStore>()(
  persist(
    (set, get) => ({
      identifier: null,
      name: null,

      generateIdentifier: () => {
        let identifier = get().identifier;
        if (!identifier) {
          identifier = generateUUID();
          set({ identifier });
        }
        return identifier;
      },

      setIdentifier: (identifier: string) => {
        set({ identifier });
      },

      setName: (name: string) => {
        set({ name });
      },
    }),
    {
      name: 'keepfood-client',
    }
  )
);

