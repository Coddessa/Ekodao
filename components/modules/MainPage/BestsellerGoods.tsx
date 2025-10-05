import { useUnit } from 'effector-react'
import { useLang } from '@/hooks/useLang'
import { $bestsellerProducts } from '@/context/modals/goods'
import { getBestsellerProductsFx } from '@/api/main-page'
import MainPageSection from './MainPageSection'

const BestsellerGoods = () => {
  const goods = useUnit($bestsellerProducts)
  console.log(goods)

  const spinner = useUnit(getBestsellerProductsFx.pending)
  const { lang, translations } = useLang()

  return (
    <MainPageSection
      title={translations[lang].main_page.bestsellers_title}
      titleSecond={translations[lang].main_page.bestsellers_second_title}
      goods={goods}
      spinner={spinner}
    />
  )
}

export default BestsellerGoods
