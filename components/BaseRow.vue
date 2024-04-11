<script lang="ts" setup>
defineProps<{
  label?: string
  responsive?: boolean
}>()
</script>

<template>
  <div
    class="grid py-1"
    :class="{
      'grid-cols-3 gap-4': !responsive,
      'grid-cols-1 md:grid-cols-3 gap-1 md:gap-4': responsive,
    }"
  >
    <div class="col-span-1">
      <slot name="label">
        <p class="text-sm text-dim">
          {{ label }}
        </p>
      </slot>
    </div>

    <div
      :class="{
        'col-span-2': !responsive,
        'col-span-1 md:col-span-2': responsive
      }"
    >
      <slot name="value" />
    </div>
  </div>
</template>
