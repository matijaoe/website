<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { type ButtonVariants, buttonVariants } from '.'
import { cn } from '@/utils/lib'
import type { RouteLocationRaw } from '#vue-router'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  to?: RouteLocationRaw
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <NuxtLink
    v-if="props.to"
    :to="to"
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </NuxtLink>

  <Primitive
    v-else
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
