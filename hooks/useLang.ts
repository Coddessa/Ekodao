'use client'
import { useUnit } from 'effector-react'
import { $Lang } from '@/context/lang'
import translationJson from '@/public/translations/translations.json'

export const useLang = () => {
  const lang = useUnit($Lang)
  const translations = translationJson
  return { lang, translations }
}
