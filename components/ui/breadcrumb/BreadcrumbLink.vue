<script lang="ts" setup>
import type { PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/lib'

const props = defineProps<PrimitiveProps & { class?: HTMLAttributes['class'] }>()
</script>

<template>
  <NuxtLink
    :as-child="asChild"
    :class="cn('transition-colors hover:text-foreground', props.class)"
  >
    <slot />
  </NuxtLink>
</template>
