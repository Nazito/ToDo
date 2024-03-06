import { baseColors } from 'src/theme/colors'
import { ButtonTheme } from './types'
import { EButtonVariants } from 'src/types/types'

export const buttonTheme: ButtonTheme = {
  [EButtonVariants.Default]: {
    'background': baseColors.green,
    'backgroundHover': baseColors.greenHover,
    'color': baseColors.background,
    'colorHover': baseColors.green,
    'border': 'none',
    'borderHover': 'none',
  },
}
