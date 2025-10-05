import { useCallback, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useCrumbText } from './useCrumbText'
import { usePageTitle } from './usePageTitle'
import { useLang } from './useLang'
import { productCategories } from '@/constants/product'

export const useBreadcrumbs = (page: string) => {
  const [dynamicTitle, setDynamicTitle] = useState('')
  const [breadcrumbs, setBreadcrumbs] = useState<HTMLUListElement | null>(null)
  const { lang, translations } = useLang()
  const pathname = usePathname()
  const { crumbText } = useCrumbText(page)
  const getDefaultTextGenerator = useCallback(() => crumbText, [crumbText])
  const getTextGenerator = useCallback(
    (param: string) => (({}) as Record<string, string>)[param],
    []
  )
  usePageTitle(page, dynamicTitle)

  useEffect(() => {
    const breadcrumbsEl = document.querySelector(
      '.breadcrumbs'
    ) as HTMLUListElement
    setBreadcrumbs(breadcrumbsEl)

    const lastCrumb = document.querySelector('.last-crumb') as HTMLElement
    if (!lastCrumb) return

    const productTypePathname = pathname.split(`/${page}/`)[1]

    if (!productTypePathname) {
      setDynamicTitle('')
      lastCrumb.textContent = crumbText
      return
    }

    if (!productCategories.includes(productTypePathname)) return

    const text = (
      translations[lang][
        page === 'comparison' ? 'comparison' : 'breadcrumbs'
      ] as {
        [index: string]: string
      }
    )[productTypePathname]

    setDynamicTitle(text)
    lastCrumb.textContent = text
  }, [crumbText, lang, pathname, translations, page])

  return { getDefaultTextGenerator, getTextGenerator, breadcrumbs }
}
