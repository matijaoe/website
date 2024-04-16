// TODO: not used anymore but left if for style reference

import { theme } from '@unocss/preset-mini'
import {
  defineConfig,
  presetTypography,
} from 'unocss'

const colors = {
  ...theme.colors,
  default: theme.colors.zinc,
}

const config = defineConfig({
  presets: [
    // presetUno(),
    // TODO: replace with tailwind
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
  ],

  theme: {
    colors,
  },

  shortcuts: {
    hyperlink: 'underline decoration-default-300 dark:decoration-default-600 hover:decoration-current decoration-0.1em decoration-offset-0.15em',
  },
})

export default config
