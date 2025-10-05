/* eslint-disable @next/next/no-img-element */
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { useLang } from '@/hooks/useLang'
import styles from '@/styles/main-page/index.module.scss'
import GuideSlide from './GuideSlide'
import img0 from '@/assets/img/slider0.png'
import img1 from '@/assets/img/slider1.png'
import img2 from '@/assets/img/slider2.png'

const Guide = () => {
  const { lang, translations } = useLang()

  const handleSlideClick = (e: SwiperType) => e.slideTo(e.clickedIndex)

  const slides = [
    {
      id: 0,
      title: `${translations[lang].main_page.plant0}`,
      category: `${translations[lang].main_page.plant0_category}`,
      succ: ``,
      image: img0,
    },
    {
      id: 2,
      title: `${translations[lang].main_page.plant2}`,
      category: `${translations[lang].main_page.plant2_category}`,
      succ: `${translations[lang].main_page.plant2_succ}`,
      image: img2,
    },

    {
      id: 1,
      title: `${translations[lang].main_page.plant1}`,
      category: `${translations[lang].main_page.plant1_category}`,
      succ: ``,
      image: img1,
    },
  ]
  return (
    <section className={styles.guide}>
      <h1 className='visually-hidden'>
        {translations[lang].main_page.guide_hidden_title}
      </h1>
      <img className={styles.guide__imgbg} src='/img/menu-bg.png' alt='' />
      <Swiper
        className={styles.guide__slider}
        effect='coverflow'
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        slidesPerView={Math.min(slides.length, 3)}
        initialSlide={1}
        autoplay
        loop={true}
        navigation
        onClick={handleSlideClick}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        grabCursor
        centeredSlides
      >
        {slides.map((slide) => (
          <SwiperSlide className={styles.guide__slider__slide} key={slide.id}>
            <GuideSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`container ${styles.guide__container}`}>
        {' '}
        <div className={styles.guide__title__container}>
          <h2 className={styles.guide__title}>
            {translations[lang].main_page.guide_title}
          </h2>
          <div className={styles.guide__title__subtitle}>
            {translations[lang].main_page.guide_description}
          </div>
          <button className={`btn-reset ${styles.guide__btn}`}>
            {translations[lang].main_page.guide_btn}
          </button>
        </div>
      </div>
    </section>
  )
}
export default Guide
