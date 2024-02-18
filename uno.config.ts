import {
  defineConfig,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import { theme } from '@unocss/preset-mini'

export default defineConfig({
  presets: [
    presetUno(),
    // presetAttributify(),
    // presetTypography(),
    presetWebFonts({
      fonts: {
        sans: {
          provider: 'fontshare',
          name: 'Satoshi'
        },
        mono: 'JetBrains Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup({
      separators: [':'],
    }),
  ],

  theme: {
    colors: {
      default: theme.colors?.neutral,
      // 'primary': theme.colors?.teal,
      primary: {
        50: '#fdffe4',
        100: '#f8ffc4',
        200: '#f0ff90',
        300: '#e2ff50',
        400: '#ccff05',
        500: '#b1e600',
        600: '#89b800',
        700: '#678b00',
        800: '#526d07',
        900: '#455c0b',
        950: '#233400',
      },

    },
  },

  shortcuts: {
    row: 'max-w-3xl w-full mx-auto'
  },
})
