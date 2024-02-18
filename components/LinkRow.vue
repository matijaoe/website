<script lang="ts" setup>
defineProps<{
  label: string
  link: string
  linkText: string
}>()
</script>

<template>
  <div class="grid grid-cols-4 gap-4 py-1">
    <div class="col-span-1">
      <slot name="label">
        <p class="text-sm text-default-600 dark:text-default-500">
          {{ label }}
        </p>
      </slot>
    </div>
    <div class="col-span-3">
      <slot name="link">
        <div class="flex items-center gap-1.5">
          <NuxtLink :href="link" external class="hover:underline" target="_blank">
            {{ linkText }}
          </NuxtLink>
          <Icon name="ph:arrow-up-right" class="text-sm" />
        </div>
      </slot>
    </div>
  </div>
</template>
