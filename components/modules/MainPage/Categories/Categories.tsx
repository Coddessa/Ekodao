'use client'
import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import AllLink from '@/components/elements/AllLink/AllLink'
import useImagePreloader from '@/hooks/useImagePreloader'
import Link from 'next/link'
import Image from 'next/image'
import img0 from '@/assets/img/categoria0.png'
import img1 from '@/assets/img/categoria1.png'
import img2 from '@/assets/img/categoria2.png'
import img3 from '@/assets/img/categoria3.png'
import styles from '@/styles/main-page/index.module.scss'
import MainSlider from '../MainSlider'

const Categories = () => {
  const { lang, translations } = useLang()
  const isMedia490 = useMediaQuery(490)
  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader()
  const imgSpinnerClass = imgSpinner ? styles.img_loading : ''

  const images = [
    { src: img0, id: 1, title: translations[lang].main_page.category_plants },
    {
      src: img1,
      id: 2,
      title: translations[lang].main_page.category_fertilizers,
    },
    {
      src: img2,
      id: 3,
      title: translations[lang].main_page.category_diseases,
    },
    { src: img3, id: 4, title: translations[lang].main_page.category_care },
  ]

  return (
    <section className={styles.categories}>
      <div className={`container ${styles.categories__container}`}>
        {/*<span className={styles.categories__bg}>
          {translations[lang].main_page.category_second_title}
        </span>*/}
        <h2 className={`site-title ${styles.categories__title} `}>
          {translations[lang].main_page.category_title}
        </h2>
        <div className={styles.categories__inner}>
          <AllLink />
          {!isMedia490 && (
            <>
              <Link
                href='/ekopedia/plants'
                className={`${styles.categories__right} ${styles.categories__img} ${imgSpinnerClass}`}
              >
                <Image
                  src={img0}
                  alt='Cloth'
                  className='transition-opacity opacity-0 duration'
                  onLoad={handleLoadingImageComplete}
                />
                <span className={styles.categories__tag__0}>
                  {translations[lang].main_page.category_plants}
                </span>
              </Link>
              <div className={styles.categories__left}>
                <div className={styles.categories__left__top}>
                  <Link
                    href='/catalog/accessories'
                    className={`${styles.categories__left__top__right} ${styles.categories__img} ${imgSpinnerClass}`}
                  >
                    <Image
                      src={img1}
                      alt='Accessories'
                      className='transition-opacity opacity-0 duration'
                      onLoad={handleLoadingImageComplete}
                    />
                    <span className={styles.categories__tag__1}>
                      {translations[lang].main_page.category_fertilizers}
                    </span>
                  </Link>
                  <Link
                    href='/catalog/souvenirs'
                    className={`${styles.categories__left__top__left} ${styles.categories__img} ${imgSpinnerClass}`}
                  >
                    <Image
                      src={img2}
                      alt='Souvenirs'
                      className='transition-opacity opacity-0 duration'
                      onLoad={handleLoadingImageComplete}
                    />
                    <span className={styles.categories__tag__2}>
                      {translations[lang].main_page.category_diseases}
                    </span>
                  </Link>
                </div>
                <Link
                  href='/catalog/office'
                  className={`${styles.categories__left__bottom} ${styles.categories__img} ${imgSpinnerClass}`}
                >
                  <Image
                    src={img3}
                    alt='Office'
                    className='transition-opacity opacity-0 duration'
                    onLoad={handleLoadingImageComplete}
                  />
                  <span className={styles.categories__tag__3}>
                    {translations[lang].main_page.category_care}
                  </span>
                </Link>
              </div>
            </>
          )}
          {isMedia490 && <MainSlider images={images} />}
        </div>
      </div>
    </section>
  )
}
export default Categories
