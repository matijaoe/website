import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transition-colors',
  {
    variants: {
      variant: {
        default:
          'bg-[hsl(var(--btn-primary-bg))] text-[hsl(var(--btn-primary-text))] border border-[hsl(var(--btn-primary-border))] hover:bg-[hsl(var(--btn-primary-bg-hover))]',
        secondary:
          'bg-[hsl(var(--btn-secondary-bg))] text-[hsl(var(--btn-secondary-text))] border border-[hsl(var(--btn-secondary-border))] hover:bg-[hsl(var(--btn-secondary-bg-hover))] backdrop-blur-md hover:backdrop-blur-lg',
        ghost:
          'text-[hsl(var(--btn-ghost-text))] hover:bg-black/5 hover:backdrop-blur-lg dark:hover:bg-white/10',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        'default': 'h-9 px-2.5 py-2 gap-[5px]',
        'sm': 'h-8 px-2 py-1.5 text-xs gap-1',
        'lg': 'h-10 px-3.5 py-2.5 gap-2',
        'icon': 'h-8 w-8',
        'icon-lg': 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
