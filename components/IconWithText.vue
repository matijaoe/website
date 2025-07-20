<script setup lang="ts">
withDefaults(defineProps<{
  text: string
  icon: string
  iconSize?: string
  iconClass?: string
}>(), {
  iconSize: '0.75em',
  iconClass: '',
})
</script>

<template>
  <span class="inline-flex gap-1 items-baseline">
    {{ text }}<Icon :name="icon" :size="iconSize" :class="iconClass" />
  </span>
</template>
