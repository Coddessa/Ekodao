/* eslint-disable @next/next/no-img-element */
/* eslint-disable indent */
'use client'

import { useLang } from '@/hooks/useLang'
import { IEkopediaListItemProps } from '@/types/modules'
import React, { useRef, useState } from 'react'
import styles from '@/styles/ekopedia-list-item/index.module.scss'
import ProductLabel from './ProductLabel'
import Link from 'next/link'
import Image from 'next/image'
import ProductLabelEkopedia from './ProductLabelEkopedia'
import { useRouter } from 'next/navigation' // ✅ заменили импорт
import ProductItemActionBtn from '@/components/elements/ProductItemActionBtn/ProductItemActionBtn'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { addOverflowHiddenToBody } from '@/lib/utils/common'
import { showQuickViewModal } from '@/context/modals'
import { setCurrentProduct } from '@/context/modals/goods'

const ProductsListItem = ({ item, title }: IEkopediaListItemProps) => {
  const router = useRouter()
  const { lang, translations } = useLang()
  const isTitleForNew = title === translations[lang].main_page.new_title
  const isPlant = item.ekopedia === 'plants'
  const isSucculent = item.isSucculent
  const isFertilizers = item.ekopedia === 'fertilizers'
  const isMedia800 = useMediaQuery(800)

  const handleShowQuickViewModal = () => {
    addOverflowHiddenToBody()
    showQuickViewModal()
    setCurrentProduct(item)
  }

  // состояние для слайдера картинок
  const [currentImage, setCurrentImage] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const handleCardClick = () => {
    router.push(`/ekopedia/${item.ekopedia}/${item._id}`)
  }
  const startSlideshow = () => {
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1 < item.images.length ? prev + 1 : 0))
    }, 1300) // смена раз в секунду
  }

  const stopSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setCurrentImage(0) // возвращаем первую картинку
  }

  const getStarImage = (rating?: number) => {
    if (typeof rating !== 'number') return '/img/star/star0.svg'
    if (rating <= 1.9) return '/img/star/star0119.svg'
    if (rating <= 2.2) return '/img/star/star2022.svg'
    if (rating <= 2.6) return '/img/star/star2326.svg'
    if (rating <= 3.5) return '/img/star/star2635.svg'
    if (rating <= 4.5) return '/img/star/star3645.svg'
    if (rating <= 4.9) return '/img/star/star4649.svg'
    return '/img/star/star5.svg'
  }

  const formatLikes = (likes?: number) => {
    if (!likes || likes === 0) return '0'
    if (likes < 1000) return likes.toString()
    if (likes < 1_000_000)
      return (likes / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
    return (likes / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M'
  }

  const formatCount = (count?: number) => {
    if (!count || count === 0) return '0'
    if (count < 1000) return count.toString()
    if (count < 1_000_000)
      return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
    return (count / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M'
  }

  return (
    <li
      className={styles.list__item}
      onClick={handleCardClick}
      role='link'
      tabIndex={0}
    >
      <Link href={`/ekopedia/${isTitleForNew ? 'new' : 'popular'}`}>
        {title ? (
          <span
            className={`${styles.list__item__label} ${
              isTitleForNew
                ? styles.list__item__new
                : styles.list__item__bestseller
            }`}
          >
            {isTitleForNew
              ? translations[lang].main_page.is_new
              : translations[lang].main_page.is_bestseller}
          </span>
        ) : !item.isNew && !item.isBestseller ? (
          ''
        ) : (
          <ProductLabel isBestseller={item.isBestseller} isNew={item.isNew} />
        )}
      </Link>

      <Link
        href={`/ekopedia/${item.ekopedia}`}
        className={styles.list__productLabelEkopedia}
      >
        <ProductLabelEkopedia ekopedia={item.ekopedia} />
      </Link>
      <div className={styles.list__item__actions}>
        <ProductItemActionBtn
          text={translations[lang].product.add_to_favorites}
          iconClass='actions__btn_favorite'
        />
        <ProductItemActionBtn
          text={translations[lang].product.add_to_comparison}
          iconClass='actions__btn_comparison'
        />
        {!isMedia800 && (
          <ProductItemActionBtn
            text={translations[lang].product.quick_view}
            iconClass='actions__btn_quick_view'
            callback={handleShowQuickViewModal}
          />
        )}
      </div>

      <Link
        href={`/ekopedia/${item.ekopedia}/${item._id}`}
        className={styles.list__item__img}
        onMouseEnter={startSlideshow}
        onMouseLeave={stopSlideshow}
      >
        <Image
          src={item.images[currentImage]}
          alt={item.name}
          fill
          className={styles.img}
        />
      </Link>

      <div className={styles.list__item__inner}>
        <div className={styles.list__item__inner__types__container}>
          <Link
            className={styles.decoration}
            href={`/ekopedia/${isPlant ? item.nameGenus : item.type}`}
          >
            <div className={styles.list__item__inner__types__titleSub}>
              {isPlant
                ? item.nameGenus
                : translations[lang].type.fertilizers[
                    item.type as keyof (typeof translations)[typeof lang]['type']['fertilizers']
                  ] ?? ''}
            </div>
          </Link>
          {isPlant ? (
            <div className={styles.list__item__inner__types__containerI}>
              {isSucculent ? (
                <span
                  className={
                    styles.list__item__inner__types__containerI__succulents
                  }
                />
              ) : (
                <span />
              )}
              <span
                className={
                  styles[`list__item__inner__types__containerI__${item.type}`]
                }
              />
            </div>
          ) : (
            <div className={styles.list__item__inner__types__containerI}>
              <span
                className={
                  styles.list__item__inner__types__containerI__fertilizers
                }
              />
            </div>
          )}
        </div>

        <h3 className={styles.list__item__title}>
          <Link href={`/ekopedia/${item.ekopedia}/${item._id}`}>
            {item.name}
          </Link>
        </h3>
        <p className={styles.list__item__code}>
          {item.ekopediaCode} • {item.nameFamilia}{' '}
          {translations[lang].country[
            item.characteristics
              .country as keyof (typeof translations)[typeof lang]['country']
          ] ?? ''}
        </p>

        <div className={styles.blockButton}>
          {/* Лайки для растений */}
          {isPlant && typeof item.likes === 'number' && (
            <div className={styles.blockButton__likes}>
              <img
                src={item.likes > 0 ? '/img/like.svg' : '/img/like0.svg'}
                alt='Лайк'
                className={styles.blockButton__likeIcon}
              />
              <span className={styles.blockButton__likeCount}>
                {formatLikes(item.likes)}
              </span>
            </div>
          )}

          {/* Рейтинг для удобрений */}
          {isFertilizers && typeof item.rating === 'number' && (
            <div className={styles.blockButton__rating}>
              <img
                src={getStarImage(item.rating)}
                alt={`Рейтинг ${item.rating}`}
                className={styles.blockButton__starImage}
              />
              <span className={styles.blockButton__ratingValue}>
                {item.rating.toFixed(1)}
              </span>
              <span className={styles.blockButton__ratingValue__count}>
                ({formatCount(item.ratingCount)})
              </span>
            </div>
          )}

          <button className={`btn-reset ${styles.list__item__learnmore}`}>
            {translations[lang].product.learn_more}
            <span className={styles.list__item__learnmore__arrowMask} />
          </button>
        </div>
      </div>
    </li>
  )
}

export default ProductsListItem
