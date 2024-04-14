<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/lib'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-xl border bg-transparent backdrop-blur-3xl text-card-foreground shadow hover:bg-foreground/[1%] dark:hover:bg-white/[2%]',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
