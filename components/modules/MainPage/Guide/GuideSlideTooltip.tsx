import Image from 'next/image'
import { IGuideSlideTooltip } from '@/types/main-page'
import styles from '@/styles/main-page/index.module.scss'

const GuideSlideTooltip = ({
  title,
  category,
  succ,
  image,
}: IGuideSlideTooltip) => (
  <div className={`${styles.guide__slider__slide__popup} slide-popup`}>
    <span className={styles.guide__slider__slide__popup__arrow} />
    <Image
      className={styles.guide__slider__slide__popup__img}
      src={image}
      alt={title}
    />
    <p className={styles.guide__slider__slide__popup__inner}>
      <b className={styles.guide__slider__slide__popup__title}>{title}</b>
      <b className={styles.guide__slider__slide__popup__category}>{category}</b>
      <span className={styles.guide__slider__slide__popup__succ}>{succ}</span>
    </p>
  </div>
)

export default GuideSlideTooltip
