import React, { createContext, useContext } from 'react'

export const TranslationContext = createContext()

export function useTranslation() {
  return useContext(TranslationContext)
}
