<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { type ButtonVariants, buttonVariants } from '.'
import { cn } from '@/utils/lib'
import type { NuxtLinkProps } from '#app'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  to?: NuxtLinkProps['to']
  loading?: boolean
  icon?: string
}

// TODO: only extend NuxtLinkProps when to is defined
const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="cn(buttonVariants({ variant, size }), 'flex items-center', props.class)"
  >
    <slot />
    <slot v-if="$slots.icon || icon" name="icon">
      <Icon v-if="icon" :name="icon" />
    </slot>
  </NuxtLink>

  <Primitive
    v-else
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
    <slot v-if="!loading && ($slots.icon || icon)" name="icon">
      <Icon v-if="!loading && icon" :name="icon" />
    </slot>
    <slot v-if="loading" name="loading">
      <Icon name="lucide:loader" class="animate-spin" />
    </slot>
  </Primitive>
</template>
