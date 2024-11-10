import { darkTheme, Theme } from '@rainbow-me/rainbowkit'
import { DeepPartial } from '@shared/types'

// TODO: ideally the connection button and post-connection info would be resized on mobile
/**
 * Custom PoolTogether RainbowKit Theme
 */
export const ptRainbowTheme = (): Theme => {
  const theme: Theme = darkTheme()

  const ptTheme: DeepPartial<Theme> = {
    colors: {
      accentColor: '#F645B6',
      connectButtonBackground: 'transparent',
      connectButtonText: '#000'
    },
    fonts: {
      body: 'Grotesk'
    },
    shadows: {
      connectButton: '0 0 0 transparent'
    }
  }

  Object.assign(theme.colors, ptTheme.colors)
  Object.assign(theme.fonts, ptTheme.fonts)
  Object.assign(theme.shadows, ptTheme.shadows)

  return theme
}
