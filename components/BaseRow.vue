<script lang="ts" setup>
defineProps<{
  label?: string
  responsive?: boolean
}>()
</script>

<template>
  <div
    class="grid py-1 text-md"
    :class="{
      'grid-cols-3 gap-3': !responsive,
      'grid-cols-1 md:grid-cols-3 gap-1 md:gap-2': responsive,
    }"
  >
    <div class="col-span-1">
      <slot name="label">
        <p class="text-muted-foreground text-base">
          {{ label }}
        </p>
      </slot>
    </div>

    <div
      class="text-lg"
      :class="{
        'col-span-2': !responsive,
        'col-span-1 md:col-span-2': responsive,
      }"
    >
      <slot />
    </div>
  </div>
</template>
