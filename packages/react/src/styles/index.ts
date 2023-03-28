import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  space,
  fonts,
  radii,
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
} from '@ignite-ui/tokens'

export const {
  css,
  theme,
  styled,
  config,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
  },
  theme: {
    space,
    fonts,
    radii,
    colors,
    fontSizes,
    fontWeights,
    lineHeights,
  },
})
