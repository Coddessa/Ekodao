import { useUnit } from 'effector-react'
import { $currentProduct } from '@/context/modals/goods'

export const useCartAction = () => {
  const product = useUnit($currentProduct)

  return { product }
}
