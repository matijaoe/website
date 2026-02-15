import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Badge } from './Badge.vue'

export const badgeVariants = cva(
  'inline-flex items-center rounded-md border focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        'default':
          'border-transparent bg-primary text-primary-foreground shadow-sm transition-colors hover:bg-primary/80',
        'secondary':
          'border-transparent bg-secondary text-secondary-foreground transition-colors hover:bg-secondary/80',
        'destructive':
          'border-transparent bg-destructive text-destructive-foreground shadow-sm transition-colors hover:bg-destructive/80',
        'outline': 'text-foreground bg-background-alt',
        'primary': 'border-transparent bg-primary text-primary-foreground shadow-sm transition-colors hover:bg-primary/90',
        'secondary-border': 'border-transparent bg-secondary text-secondary-foreground transition-colors hover:bg-secondary/80 border-border dark:border-muted-foreground/5',
      },
      size: {
        sm: 'px-[6px] py-[1px] text-[11px]',
        default: 'px-2.5 py-0.5 text-xs',
        lg: 'px-3 py-1 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
