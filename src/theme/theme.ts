import { DefaultTheme } from 'styled-components'
import { breakpoints, mediaQueries, shadows } from './base'
import { lightColors } from './colors'
import { buttonTheme } from 'src/components/ui/button/theme'

const theme: DefaultTheme = {
  'colors': lightColors,
  breakpoints,
  mediaQueries,
  shadows,
  'buttons': buttonTheme,
}

export default theme
