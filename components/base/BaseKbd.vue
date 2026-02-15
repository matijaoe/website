<script lang="ts" setup>
withDefaults(defineProps<{
  keys: string[]
  variant?: 'auto' | 'auto-inverted' | 'light' | 'dark'
  size?: 'sm' | 'md'
}>(), {
  variant: 'auto',
  size: 'sm',
})
</script>

<template>
  <span class="inline-flex items-center gap-0.5">
    <kbd
      v-for="key in keys"
      :key="key"
      class="inline-flex items-center justify-center font-mono leading-none font-medium uppercase"
      :class="[
        size === 'sm' ? 'min-w-[16px] h-4 px-1 rounded-[3px] text-[10px] gap-0.5' : 'min-w-[22px] h-[22px] px-1.5 rounded-[4px] text-[11px] gap-1',
        {
          'bg-white/25 text-white/90 border border-white/30 shadow-[0_1px_0_rgba(255,255,255,0.2)]': variant === 'dark',
          'bg-black/[0.07] text-black/60 border border-black/[0.12] shadow-[0_1px_0_rgba(0,0,0,0.06)]': variant === 'light',
          'bg-[hsl(var(--background))] text-foreground/70 border border-border shadow-[0_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_0_rgba(255,255,255,0.1)]': variant === 'auto' && size === 'md',
          'bg-black/[0.07] text-black/60 border border-black/[0.12] shadow-[0_1px_0_rgba(0,0,0,0.06)] dark:bg-white/25 dark:text-white/90 dark:border-white/30 dark:shadow-[0_1px_0_rgba(255,255,255,0.2)]': variant === 'auto' && size === 'sm',
          'bg-white/25 text-white/90 border border-white/30 shadow-[0_1px_0_rgba(255,255,255,0.2)] dark:bg-black/[0.07] dark:text-black/60 dark:border-black/[0.12] dark:shadow-[0_1px_0_rgba(0,0,0,0.06)]': variant === 'auto-inverted',
        },
      ]"
    >
      {{ key }}
    </kbd>
  </span>
</template>
