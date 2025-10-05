import { StoreWritable } from 'effector'

export interface IEkopediaPlant {
  _id: string
  ekopedia: string
  type: string
  name: string
  nameGenus: string
  nameFamilia: string
  description: string
  morfo: string
  characteristics: { [index: string]: string }
  images: string[]
  ekopediaCode: string
  isBestseller: boolean
  isNew: boolean
  isSucculent: boolean
  colors: IColors
  popularity: number
  errorMessage?: string
  rating?: number
  likes?: number
  ratingCount?: number
}

export interface IColors {
  color1: string
  color2: string
  color3: string
}

export interface ISelectedSizes {
  //sizes: ISizes
  type: string
  className?: string
}

export interface IBaseEffectProps {
  jwt: string
  id: string
  setSpinner: (arg0: boolean) => void
}

export type UseGoodsByAuth<T> = StoreWritable<T>

export interface IGetGeolocationFx {
  lat: number
  lon: number
}
