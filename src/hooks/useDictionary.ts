'use client'

import { createContext, useContext } from 'react'

type Dictionary = {
    [key: string]: string;
}

export const DictionaryContext = createContext<Dictionary | null>(null)

export function useDictionary() {
    const dictionary = useContext(DictionaryContext)
    console.log(dictionary)
    if (!dictionary) {
        throw new Error('useDictionary must be used within a DictionaryProvider')
    }
    return dictionary
}