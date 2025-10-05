/* eslint-disable indent */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
//import Link from 'next/link'
import { closeQuickViewModal } from '@/context/modals'
import { removeOverflowHiddenFromBody } from '@/lib/utils/common'
import QuickViewModalSlider from './QuickViewModalSlider'
//import { useLang } from '@/hooks/useLang'
//import stylesForProduct from '@/styles/ekopedia-list-item/index.module.scss'
import styles from '@/styles/quick-view-modal/index.module.scss'
import { useCartAction } from '@/hooks/useCartAction'
import { useProductImages } from '@/hooks/useProductImages'
import { useLang } from '@/hooks/useLang'
import Link from 'next/link'
import ProductItemActionBtn from '@/components/elements/ProductItemActionBtn/ProductItemActionBtn'

const QuickViewModal = () => {
  const { lang, translations } = useLang()
  const { product } = useCartAction()
  const images = useProductImages(product)
  const handleCloseModal = () => {
    removeOverflowHiddenFromBody()
    closeQuickViewModal()
  }

  if (!product || !product._id) {
    return null // или можно вернуть Loader
  }

  const isPlant = product.ekopedia === 'plants'
  const isSucculent = product.isSucculent
  const isFertilizers = product.ekopedia === 'fertilizers'

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
    <div className={styles.modal}>
      <button
        className={`btn-reset ${styles.modal__close}`}
        onClick={handleCloseModal}
      />
      <div className={styles.modal__actions}>
        <ProductItemActionBtn
          text={translations[lang].product.add_to_favorites}
          iconClass='actions__btn_favorite'
          withTooltip={false}
        />
        <ProductItemActionBtn
          text={translations[lang].product.add_to_comparison}
          iconClass='actions__btn_comparison'
          withTooltip={false}
        />
      </div>
      <div className={styles.modal__left}>
        <QuickViewModalSlider images={images} />
      </div>
      <div className={styles.modal__right}>
        <Link
          className={styles.decoration}
          href={`/ekopedia/${isPlant ? product.nameGenus : product.type}`}
        >
          <p className={styles.modal__right__titleSub}>
            {isPlant ? product.nameGenus : ``}
            {isFertilizers
              ? translations[lang].type.fertilizers[
                  product.type as keyof (typeof translations)[typeof lang]['type']['fertilizers']
                ] ?? ''
              : ``}
          </p>
        </Link>

        <h3 className={styles.modal__right__title}>
          {' '}
          <Link href={`/ekopedia/${product.ekopedia}/${product._id}`}>
            {product.name}
          </Link>
        </h3>

        <p className={styles.modal__right__code}>
          {[
            product.ekopediaCode,
            isPlant ? product.nameFamilia : null,
            isFertilizers
              ? translations[lang].country[
                  product.characteristics
                    .country as keyof (typeof translations)[typeof lang]['country']
                ] ?? null
              : null,
            isFertilizers ? product.characteristics.manufacturer || null : null,
          ]
            .filter(Boolean)
            .join(' • ')}
        </p>

        <div className={styles.modal__right__containerIcons}>
          {isPlant && (
            <div className={styles.modal__right__containerIcons__stroke}>
              <span
                className={`${
                  styles[`types__${product.type}` as keyof typeof styles]
                } ${styles.types__item}`}
              />
              {translations[lang].type.plants[
                product.type as keyof (typeof translations)[typeof lang]['type']['plants']
              ] ?? ''}
            </div>
          )}

          {isSucculent ? (
            <div className={styles.modal__right__containerIcons__stroke}>
              {' '}
              <span
                className={`${styles.types__succulents} ${styles.types__item}`}
              />{' '}
              {translations[lang].type.plants.succulent}
            </div>
          ) : (
            ''
          )}
          {isFertilizers ? (
            <div className={styles.modal__right__containerIcons__stroke}>
              {' '}
              <span
                className={`${styles[`types__fertilizers`]} ${
                  styles.types__item
                }`}
              />{' '}
              Удобрения
              {translations[lang].type.plants[
                product.type as keyof (typeof translations)[typeof lang]['type']['plants']
              ] ?? ''}
            </div>
          ) : (
            ''
          )}
        </div>

        <p className={`${styles.modal__right__text} ${styles.line_clamp}`}>
          {product.description}
        </p>

        <div className={styles.blockButton}>
          {/* Лайки для растений */}
          {isPlant && typeof product.likes === 'number' && (
            <div className={styles.blockButton__likes}>
              <img
                src={product.likes > 0 ? '/img/like.svg' : '/img/like0.svg'}
                alt='Лайк'
                className={styles.blockButton__likeIcon}
              />
              <span className={styles.blockButton__likeCount}>
                {formatLikes(product.likes)}
              </span>
            </div>
          )}
          {/* Цвета для растений */}
          {isPlant && product.colors && (
            <div className={styles.blockButton__dots}>
              {[
                product.colors.color1,
                product.colors.color2,
                product.colors.color3,
              ].map(
                (color, index) =>
                  color && (
                    <span
                      key={index}
                      className={styles.blockButton__dots__dot}
                      style={{ backgroundColor: color }}
                    />
                  )
              )}
            </div>
          )}

          {/* Рейтинг для удобрений */}
          {isFertilizers && typeof product.rating === 'number' && (
            <div className={styles.blockButton__rating}>
              <img
                src={getStarImage(product.rating)}
                alt={`Рейтинг ${product.rating}`}
                className={styles.blockButton__starImage}
              />
              <span className={styles.blockButton__ratingValue}>
                {product.rating.toFixed(1)}
              </span>
              <span className={styles.blockButton__ratingValue__count}>
                ({formatCount(product.ratingCount)})
              </span>
            </div>
          )}
        </div>

        <div className={styles.modal__right__containerIcons}>
          {isPlant ? (
            <>
              {' '}
              <div className={styles.modal__right__containerIcons__stroke}>
                {' '}
                <span
                  className={`${styles.types__lights} ${styles.types__itemLight}`}
                />{' '}
                светолюбивое
              </div>
              <div className={styles.modal__right__containerIcons__stroke}>
                {' '}
                <span
                  className={`${styles.types__waterings} ${styles.types__itemLight}`}
                />{' '}
                редкий
              </div>
              <div className={styles.modal__right__containerIcons__stroke}>
                {' '}
                <span
                  className={`${styles.types__soils} ${styles.types__itemLight}`}
                />{' '}
                легкая, бедная
              </div>
              <div className={styles.modal__right__containerIcons__stroke}>
                {' '}
                <span
                  className={`${styles.types__pests} ${styles.types__itemLight}`}
                />{' '}
                мучнистая роса, гниль тканей
              </div>
              <div className={styles.modal__right__containerIcons__stroke}>
                {' '}
                <span
                  className={`${styles.types__diseases} ${styles.types__itemLight}`}
                />{' '}
                тля, щитовка, мучнистый червец
              </div>
            </>
          ) : (
            ''
          )}
        </div>

        <div className={styles.modal__right__more}>
          <Link
            href={`/catalog/${product.ekopedia}/${product._id}`}
            className={styles.modal__right__more__link}
            onClick={handleCloseModal}
          >
            {translations[lang].product.learn_more}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default QuickViewModal
