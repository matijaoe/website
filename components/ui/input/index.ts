import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Input } from './Input.vue'

export const inputVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
      },
      size: {
        default: 'h-9 px-3 py-1 text-sm file:text-sm',
        lg: 'h-12 px-4 py-3 text-base file:text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

export type InputVariants = VariantProps<typeof inputVariants>
