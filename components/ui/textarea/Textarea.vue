<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { TextareaVariants } from '.'
import { useVModel } from '@vueuse/core'
import { cn } from '@/utils/lib'
import { textareaVariants } from '.'

const props = defineProps<{
  class?: HTMLAttributes['class']
  defaultValue?: string | number
  modelValue?: string | number
  variant?: TextareaVariants['variant']
  size?: TextareaVariants['size']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <textarea
    v-model="modelValue"
    :class="cn(textareaVariants({ variant, size }), 'flex w-full rounded-md border border-input bg-transparent shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50', props.class)"
  />
</template>
