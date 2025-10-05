import { useLang } from '@/hooks/useLang'
import { IEkopediaLabelProps } from '@/types/modules'
import styles from '@/styles/ekopedia-list-item/index.module.scss'

const ProductLabel = ({ ekopedia }: IEkopediaLabelProps) => {
  const { lang, translations } = useLang()
  const className = `${styles.list__item__label} ${
    styles[`list__item__${ekopedia}`]
  }`

  return (
    <span className={className}>
      {translations[lang].ekopedia_label[
        ekopedia as keyof (typeof translations)[typeof lang]['ekopedia_label']
      ] ?? ''}
    </span>
  )
}

export default ProductLabel
