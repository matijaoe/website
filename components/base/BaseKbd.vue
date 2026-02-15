<script lang="ts" setup>
withDefaults(defineProps<{
  keys: string[]
  variant?: 'auto' | 'light' | 'dark'
}>(), {
  variant: 'auto',
})
</script>

<template>
  <span class="inline-flex items-center gap-0.5">
    <kbd
      v-for="key in keys"
      :key="key"
      class="inline-flex items-center justify-center min-w-[16px] h-4 px-1 rounded-sm border font-mono text-[10px] leading-none font-medium uppercase"
      :class="{
        'border-white/25 bg-white/20 text-white/80 shadow-[0_1px_0_0.5px] shadow-white/15': variant === 'dark',
        'border-black/10 bg-black/[0.04] text-black/45': variant === 'light',
        'border-black/10 bg-black/[0.04] text-black/45 dark:border-white/25 dark:bg-white/20 dark:text-white/80 dark:shadow-[0_1px_0_0.5px] dark:shadow-white/15': variant === 'auto',
      }"
    >
      {{ key }}
    </kbd>
  </span>
</template>
