import { FC, useEffect, useState } from 'react'
import { FieldError, useFormContext } from 'react-hook-form'

import {
  ErrorMessage,
  InputBlock,
  InputStyled,
  InputWrapper,
  Label,
} from './styled'

interface InputProps {
  name: string
  label?: string
  value: string
  errorMessage?: FieldError
  disabled?: boolean
}

export const InputRHF: FC<InputProps> = ({
  name,
  label,
  value,
  errorMessage,
  disabled = false,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const {
    register,
    'formState': { errors },
  } = useFormContext()

  useEffect(() => {
    if (!isFocused && value) {
      setIsFocused(Boolean(value))
    }
  }, [value, isFocused])

  const onFocus = ():void => { setIsFocused(true) }
  const onBlur = ():void => { setIsFocused(false) }

  const error = errors[name] as FieldError

  return (
    <InputWrapper>
      <InputBlock>
        <Label $isFocused={isFocused} htmlFor={name}>
          {label}
        </Label>
        <InputStyled
          {...register(name)}
          id={name}
          type={'text'}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          $isError={Boolean(errorMessage)}
          $isFocused={isFocused}

        />
        {errors?.[name] && <ErrorMessage>{error.message}</ErrorMessage>}
      </InputBlock>
    </InputWrapper>
  )
}
