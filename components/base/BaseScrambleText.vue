<script lang="ts" setup>
const props = defineProps<{
  text: string
}>()

const display = useReactiveScramble(() => props.text)
</script>

<template>
  <span class="font-mono text-[0.9em]">{{ display }}</span>
</template>
