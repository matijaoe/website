<script lang="ts" setup>
defineProps<{
  label: string
  link: string
  linkText: string
}>()
</script>

<template>
  <BaseRow :label="label">
    <template #label>
      <slot name="label" />
    </template>

    <template #value>
      <NuxtLink :href="link" external class="text-rich hover:underline" target="_blank">
        {{ linkText }}
      </NuxtLink>
      <Icon name="ph:arrow-up-right" class="text-sm" />
    </template>
  </BaseRow>
</template>
