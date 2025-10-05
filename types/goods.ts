import { IEkopediaPlant } from './common'

export interface ILoadOneEkopediaFx {
  productId: string
  ekopedia: string
  setSpinner?: (arg0: boolean) => void
  withShowingSizeTable?: boolean
}

export interface IEkopediaSizesItemProps {
  currentSize: [string, boolean]
  selectedSize: string
  setSelectedSize: (arg0: string) => void
}

export interface IEkopediaCounterProps {
  className: string
  count: number
  setCount: (arg0: number) => void

  updateCountAsync: boolean
  initialCount?: number
  totalCount?: number
  increasePrice?: VoidFunction
  decreasePrice?: VoidFunction
}

export interface IAddToCartBtnProps {
  handleAddToCart: VoidFunction
  addToCartSpinner: boolean
  text: string
  btnDisabled?: boolean
  className?: string
}

export interface IEkopediaCountBySizeProps {
  size: string
  withCartIcon?: boolean
}

export interface ILoadEkopediaByFilterFx {
  limit: number
  offset: number
  category: string
  additionalParam?: string
  isCatalog?: boolean
}

export interface IEkopediaPlants {
  count: number
  items: IEkopediaPlant[]
}

export interface ILoadWatchedEkopediaFx {
  payload: { _id: string; category: string }[]
}
