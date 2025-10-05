import { IInputs, ISignUpFx } from '@/types/authPopup'
import { Store, Event } from 'effector'
import { useUnit } from 'effector-react'
import { useForm } from 'react-hook-form'

export const useAuthForm = (
  initialSpinner: Store<boolean>,
  isSideActive: boolean,
  event: Event<ISignUpFx> // исправлено: убедись, что импортируешь Event из 'effector'
) => {
  const spinner = useUnit(initialSpinner)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IInputs>()

  const handleSignupWithOAuth = () => '' // потом сюда можно подключить OAuth

  return {
    spinner,
    register,
    errors,
    handleSubmit,
    handleSignupWithOAuth,
  }
}
