import { MediaQueries, Breakpoints, Shadows } from './types'

export const breakpointMap: { [key: string]: number } = {
  'xs': 320,
  'sm': 576,
  'md': 768,
  'lg': 992,
  'xl': 1040,
  'xxl': 1200,
}

export const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`)

export const mediaQueries: MediaQueries = {
  'xs': `@media screen and (min-width: ${breakpointMap.xs}px)`,
  'sm': `@media screen and (min-width: ${breakpointMap.sm}px)`,
  'md': `@media screen and (min-width: ${breakpointMap.md}px)`,
  'lg': `@media screen and (min-width: ${breakpointMap.lg}px)`,
  'xl': `@media screen and (min-width: ${breakpointMap.xl}px)`,
  'xxl': `@media screen and (min-width: ${breakpointMap.xxl}px)`,
}

export const shadows: Shadows = {}
