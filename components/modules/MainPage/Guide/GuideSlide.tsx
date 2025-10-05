import Link from 'next/link'
import Image from 'next/image'
import { IGuideSlide } from '@/types/main-page'
import styles from '@/styles/main-page/index.module.scss'
import GuideSlideTooltip from './GuideSlideTooltip'

const GuideSlide = ({ slide }: { slide: IGuideSlide }) => (
  <>
    <Link href='/catalog' className='guide-slide-plus' />
    <Image
      src={slide.image}
      alt={slide.title}
      className={styles.guide__slider__slide__img}
      loading='eager'
    />
    <GuideSlideTooltip
      title={slide.title}
      image={slide.image}
      category={slide.category}
      succ={slide.succ}
    />
  </>
)

export default GuideSlide
