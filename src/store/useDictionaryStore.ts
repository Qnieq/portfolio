import { Dictionary } from '@/types/lang.types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type DictionaryState = {
    dictionary: Dictionary;
    setDictionary: (dictionary: Dictionary) => void;
};

export const useDictionaryStore = create<DictionaryState>()(
    persist(
        (set) => ({
            dictionary: {},
            setDictionary: (dictionary) => set({ dictionary }),
        }),
        {
            name: 'dictionary-store', // Название хранилища в localStorage
        }
    )
);