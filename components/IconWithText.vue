<script setup lang="ts">
withDefaults(defineProps<{
  text: string
  icon: string
  iconSize?: string
  iconClass?: string
  iconFirst?: boolean
}>(), {
  iconSize: '0.75em',
  iconClass: '',
  iconFirst: false,
})
</script>

<template>
  <span class="inline-flex gap-1 items-baseline" :class="iconFirst && 'flex-row-reverse'">
    {{ text }}<Icon :name="icon" :size="iconSize" :class="iconClass" />
  </span>
</template>
