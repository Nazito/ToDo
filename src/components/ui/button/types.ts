import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { EButtonVariants } from 'src/types/types'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>

export type ButtonPropsType = {
  variant: EButtonVariants
  fullWidth?: boolean
  as?: 'a' | 'button'
  href?: string
  external?: boolean
  isLoading?: boolean
  disabled?: boolean
} & ButtonTypes

export type ButtonThemeVariant = {
  background: string
  backgroundHover: string
  color: string
  colorHover: string
  border: string
  borderHover: string
}

export type ButtonTheme = {
  [key in EButtonVariants]: ButtonThemeVariant
}
