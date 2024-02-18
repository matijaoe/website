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
      <NuxtLink :href="link" external class="hover:underline" target="_blank">
        {{ linkText }}
      </NuxtLink>
      <Icon name="ph:arrow-up-right" class="text-sm" />
    </template>
  </BaseRow>
</template>
