import { theme } from '@unocss/preset-mini'
import {
  defineConfig,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

const config = defineConfig({
  presets: [
    presetUno(),
    // presetAttributify(),
    presetTypography({
      cssExtend: {
        // select all headings that are links, use :has or :is
        'h1 a, h2 a, h3 a, h4 a, h5 a, h6 a': {
          'color': 'inherit',
          'text-decoration': 'none !important',
        },
        'li': {
          'line-height': '2.25',
          'color': theme.colors.neutral['400'],
        },
        'li::marker': {
          color: theme.colors.neutral['400'],
        },
        'a': {
          'text-decoration-color': theme.colors.neutral['600'],
          'text-decoration-thickness': '2px',
          'text-underline-offset': '.15em',
        },
      },
    }),

    presetWebFonts({
      fonts: {
        sans: {
          provider: 'fontshare',
          name: 'Satoshi',
        },
        display: {
          provider: 'fontshare',
          name: 'Clash Display',
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
    'text-dim': 'text-default-500 dark:text-default-400',
    'row': 'max-w-2xl w-full mx-auto',
  },
})

export default config
