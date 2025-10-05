import { createEffect } from 'effector'
import { toast } from 'react-hot-toast'
import api from './apiInstance'
import { ILoadOneEkopediaFx } from '@/types/goods'

export const loadOneProductFx = createEffect(
  async ({ productId, ekopedia }: ILoadOneEkopediaFx) => {
    try {
      const { data } = await api.post('/api/goods/one', { productId, ekopedia })

      if (data?.message === 'Wrong product id') {
        return { productItem: { errorMessage: 'Wrong product id' } }
      }

      return data
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)
