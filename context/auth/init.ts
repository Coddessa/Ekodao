/*import { sample } from 'effector'
import { handleSignUp, singUpFx, handleSignIn, singInFx } from '.'
import { $auth } from './state'
import { ISignUpFx } from '@/types/authPopup'

sample({
  clock: handleSignUp,
  fn: (payload: ISignUpFx) => ({
    name: payload.name,
    email: payload.email,
    password: payload.password,
    isOAuth: payload.isOAuth,
  }),
  target: singUpFx,
})

sample({
  clock: handleSignIn,
  source: $auth,
  fn: (_, { email, password, isOAuth, name }) => ({
    email,
    password,
    isOAuth,
    name,
  }),
  target: singInFx,
})
*/

import { sample } from 'effector'
import { handleSignIn, handleSignUp, singInFx, singUpFx } from '.'

sample({
  clock: handleSignUp,
  target: singUpFx,
})

sample({
  clock: handleSignIn,
  target: singInFx,
})
