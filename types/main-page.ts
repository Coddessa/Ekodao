import { StaticImageData } from 'next/image'
import { IEkopediaPlant } from './common'

export interface IGuideSlide {
  id?: number
  image: StaticImageData
  title: string
  category: string
  succ: string
}

export type IGuideSlideTooltip = IGuideSlide

export interface IMainPageSectionProps {
  title: string
  titleSecond: string
  goods: IEkopediaPlant[]
  spinner: boolean
}
