import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Textarea } from './Textarea.vue'

export const textareaVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
      },
      size: {
        default: 'min-h-[60px] px-3 py-2 text-sm',
        lg: 'min-h-[60px] px-4 py-3 text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

export type TextareaVariants = VariantProps<typeof textareaVariants>
