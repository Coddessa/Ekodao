import { useLang } from '@/hooks/useLang'
import styles from '@/styles/main-page/index.module.scss'
import Image from 'next/image'
import img0 from '@/assets/img/sliderFooter0.png'
import img1 from '@/assets/img/sliderFooter1.png'
import img2 from '@/assets/img/sliderFooter2.png'
import img3 from '@/assets/img/sliderFooter3.png'
import Link from 'next/link'

const GuideFotter = () => {
  const { lang, translations } = useLang()

  const slides = [
    {
      id: 0,
      title: `${translations[lang].main_page.plantFooter0}`,
      category: `${translations[lang].main_page.plantFooter0_category}`,
      succ: ``,
      image: img0,
      url: '/',
    },

    {
      id: 1,
      title: `${translations[lang].main_page.plantFooter1}`,
      category: `${translations[lang].main_page.plantFooter1_category}`,
      succ: ``,
      image: img1,
      url: '/',
    },
    {
      id: 2,
      title: `${translations[lang].main_page.plantFooter2}`,
      category: `${translations[lang].main_page.plantFooter2_category}`,
      succ: ``,
      image: img2,
      url: '/',
    },
    {
      id: 3,
      title: `${translations[lang].main_page.plantFooter3}`,
      category: `${translations[lang].main_page.plantFooter3_category}`,
      succ: `${translations[lang].main_page.plant2_succ}`,
      image: img3,
      url: '/',
    },
  ]

  return (
    <section className={styles.guideFotter}>
      {slides.map((slide) => (
        <Link
          key={slide.id}
          href={slide.url}
          className={styles.guideFotter__container}
        >
          <Image
            className={styles.guideFotter__img}
            src={slide.image}
            alt={slide.title}
          />
          <div className={styles.guideFotter__textContainer}>
            <div className={styles.guideFotter__title}>{slide.title}</div>
            <div className={styles.guideFotter__category}>{slide.category}</div>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default GuideFotter
