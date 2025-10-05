'use client'
import { useGate } from 'effector-react'
import Categories from '@/components/modules/MainPage/Categories/Categories'
import Guide from '@/components/modules/MainPage/Guide/Guide'
//import GuideFotter from '@/components/modules/MainPage/Guide/GuideFotter'
import { MainPageGate } from '@/context/modals/goods'
import BestsellerGoods from '@/components/modules/MainPage/BestsellerGoods'
import NewGoods from '@/components/modules/MainPage/NewGoods'
import BrandLife from '@/components/modules/MainPage/BrandLife'

const MainPage = () => {
  useGate(MainPageGate)
  return (
    <main>
      <Guide />
      <Categories />
      <BestsellerGoods />
      <NewGoods />
      <BrandLife />
    </main>
  )
}

export default MainPage
