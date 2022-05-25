import { Theme as MuiTheme, ThemeOptions, PaletteColorOptions } from '@material-ui/core/styles'

import { PaletteOptions } from '@material-ui/core/styles/createPalette'

type CustomPaletteColorOptions = PaletteColorOptions & {
  xxsoft?: string
  xsoft?: string
  soft: string
  highlight: string
  medium?: string
  xdark?: string
  xxdark?: string
}

type CustomPaletteOptions = {
  primary?: CustomPaletteColorOptions
  success?: CustomPaletteColorOptions
  info?: CustomPaletteColorOptions
  warning?: CustomPaletteColorOptions
  error?: CustomPaletteColorOptions
  secondary?: CustomPaletteColorOptions
}

export type IThemeOptions = ThemeOptions & {
  palette: PaletteOptions & CustomPaletteOptions
}

export type ITheme = MuiTheme & {
  palette: PaletteOptions & CustomPaletteOptions
}
