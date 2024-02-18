<script lang="ts" setup>
import type { RouteLocationRaw } from '#vue-router'

defineProps<{
  to: RouteLocationRaw
  label?: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="px-1 py-2 align-middle text-sm text-default-500 transition-all dark:text-default-600 hover:text-default-800 hover:underline dark:hover-text-default-200"
    active-class="text-default-900 !dark:text-default-50"
  >
    <slot>
      {{ label }}
    </slot>
  </NuxtLink>
</template>
