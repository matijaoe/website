import { theme } from '@unocss/preset-mini'
import {
  defineConfig,
  presetTypography,
  presetUno,
  presetWebFonts,
} from 'unocss'

const colors = {
  ...theme.colors,
  default: theme.colors.zinc,
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
}

const config = defineConfig({
  presets: [
    presetUno(),
    presetTypography({
      cssExtend: {
        'h1, h2, h3, h4, h5, h6': {
          'font-family': 'Clash Display',
        },
        'h1 a, h2 a, h3 a, h4 a, h5 a, h6 a': {
          'color': 'inherit',
          'text-decoration': 'none !important',
        },
        'li': {
          'line-height': '2.25',
          'color': colors.default['600'],
        },
        'li::marker': {
          color: colors.default['300'],
        },
        '.dark li': {
          color: colors.default['400'],
        },
        '.dark li::marker': {
          color: colors.default['600'],
        },
        'a': {
          'text-decoration-color': colors.default['300'],
          'text-decoration-thickness': '0.1em',
          'text-underline-offset': '.15em',
        },
        '.dark a': {
          'text-decoration-color': colors.default['600'],
        },
        'a:hover': {
          'text-decoration-color': colors.default['900'],
        },
        '.dark a:hover': {
          'text-decoration-color': colors.default['200'],
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

  shortcuts: {
    hyperlink: 'underline decoration-default-300 dark:decoration-default-600 hover:decoration-current decoration-0.1em decoration-offset-0.15em',
  },
})

export default config
