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
    class="hover:deco px-1 py-2 text-sm text-default-400 font-500 transition dark:text-default-600 hover:underline"
    active-class="text-default-800 !dark:text-default-50"
  >
    <slot>
      {{ label }}
    </slot>
  </NuxtLink>
</template>
