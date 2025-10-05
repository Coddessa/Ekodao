import { IEkopediaPlant } from './common'

export interface IAccordionProps {
  children: React.ReactNode
  title: string | JSX.Element
  titleClass: string
  rotateIconClass?: string
}

export interface IMenuLinkItemProps {
  item: {
    id: number
    text: string
    href: string
  }
  handleRedirectToEkopedia: (arg0: string) => void
}

export interface ICatalogMenuButtonProps {
  name: string
  isActive: boolean
  handler: VoidFunction
}

export interface IEkopediaListItemProps {
  item: IEkopediaPlant
  title?: string
}

export interface Props {
  item: {
    _id: string
    ekopedia: string
    name: string
    images: string[]
  }
}

export interface IEkopediaLabelProps {
  ekopedia: string
}

export interface IProductLabelProps {
  isNew: boolean
  isBestseller: boolean
}

export interface IBreadcrumbsProps {
  getTextGenerator: (arg0: string, query: string[]) => void
  getDefaultTextGenerator: (arg0: string, href: string) => string
}

export interface ICrumbProps {
  text: string
  textGenerator: () => string
  href: string
  last: boolean
}

export interface IOrderInfoBlockProps {
  isCorrectPromotionalCode?: boolean
  isOrderPage?: boolean
}

export interface IEmptyPageContentProps {
  subtitle: string
  description: string
  btnText: string
  bgClassName: string
  emptyWord?: string
  bgWordClassName?: string
  oopsWord?: string
  title?: string
}

export interface IContentTitleProps {
  title: string
  oopsWord: string
}

export interface IProductInfoLabelProps {
  color: string
  className?: string
}
