import { Colors, Breakpoints, MediaQueries, Shadows } from './types'

export interface ITheme {
  colors: Colors
  breakpoints: Breakpoints
  mediaQueries: MediaQueries
  shadows: Shadows
}

export { default as theme } from './theme'

export { lightColors } from './colors'
