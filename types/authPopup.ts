import { FieldErrors, FieldErrorsImpl, UseFormRegister } from 'react-hook-form'

export interface IInputs {
  name: string
  email: string
  password: string
}

export interface ISignUpFx {
  password: string
  email: string
  isOAuth?: boolean
  name?: string
}

export interface IAuthSideProps {
  toggleAuth: VoidFunction
  isSideActive: boolean
}

export interface IAuthInput {
  register: UseFormRegister<IInputs>
  errors: Partial<FieldErrorsImpl<IInputs>>
}

export interface INameErrorMessageProps {
  errors: FieldErrors<IInputs & { [index: string]: string }>
  fieldName: string
  className?: string
}

export interface IVKProfileResponse {
  response: Array<{
    id: number
    first_name: string
    last_name: string
    photo_100: string
    email?: string
  }>
}
