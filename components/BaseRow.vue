<script lang="ts" setup>
defineProps<{
  label?: string
}>()
</script>

<template>
  <div class="grid grid-cols-3 gap-4 py-1">
    <div class="col-span-1">
      <slot name="label">
        <p class="text-sm text-default-600 dark:text-default-500">
          {{ label }}
        </p>
      </slot>
    </div>

    <div class="col-span-2">
      <slot name="value" />
    </div>
  </div>
</template>
