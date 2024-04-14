import { type VariantProps, cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        'default': 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        'destructive':
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        'outline':
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        'secondary':
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        'ghost': 'hover:bg-accent hover:text-accent-foreground',
        'link': 'text-primary underline-offset-4 hover:underline',
        // frosted
        'frosted-outline':
          'border border-input bg-transparent backdrop-blur-lg shadow-sm hover:bg-white/5 hover:text-accent-foreground',
        'frosted':
          'bg-white/10 backdrop-blur-lg text-secondary-foreground shadow-sm hover:bg-white/15',
        'frosted-ghost': ' backdrop-blur-lg hover:bg-white/5 hover:text-accent-foreground',
      },
      size: {
        'default': 'h-9 px-4 py-2',
        'sm': 'h-8 px-3 text-xs',
        'lg': 'h-10 px-8',
        'icon': 'h-9 w-9',
        'icon-lg': 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
