'use client'
import { createDomain, Effect, sample } from 'effector'
import { createGate, Gate } from 'effector-react'
import { getBestsellerProductsFx, getNewProductsFx } from '@/api/main-page'
import { IEkopediaPlant } from '@/types/common'
import { loadOneProductFx } from '@/api/goods'
import { ILoadOneEkopediaFx } from '@/types/goods'

export const goods = createDomain()
export const MainPageGate = createGate()

export const setCurrentProduct = goods.createEvent<IEkopediaPlant>()
export const loadOneProduct = goods.createEvent<ILoadOneEkopediaFx>()

const goodsStoreInstance = (effect: Effect<void, [], Error>) =>
  goods
    .createStore([])
    .on(effect.done, (_, { result }) => result)
    .on(effect.fail, (_, { error }) => {
      console.log(error.message)
    })

const goodsSampleInstance = (
  effect: Effect<void, [], Error>,
  gate: Gate<unknown>
) =>
  sample({
    clock: gate.open,
    target: effect,
  })

export const $newProducts = goodsStoreInstance(getNewProductsFx)
export const $bestsellerProducts = goodsStoreInstance(getBestsellerProductsFx)

export const $currentProduct = goods
  .createStore<IEkopediaPlant>({} as IEkopediaPlant)
  .on(setCurrentProduct, (_, product) => product)
  .on(loadOneProductFx.done, (_, { result }) => result.productItem)

sample({ clock: loadOneProduct, to: loadOneProductFx })

export const $products = goods.createStore<IEkopediaPlant>({} as IEkopediaPlant)
//.on(loadProductsByFilterFx.done, (_, { result }) => result)

export const $watchedProducts = goods.createStore<IEkopediaPlant>(
  {} as IEkopediaPlant
)
//.on(loadWatchedProductsFx.done, (_, { result }) => result)

export const $productsBySearch = goods.createStore<IEkopediaPlant>(
  {} as IEkopediaPlant
)
//.on(loadProductBySearchFx.done, (_, { result }) => result)
//.on(resetProductBySearch, () => ({ count: 0, items: [] }))

goodsSampleInstance(getNewProductsFx, MainPageGate)
goodsSampleInstance(getBestsellerProductsFx, MainPageGate)
