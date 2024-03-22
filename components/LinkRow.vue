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
      <NuxtLink :href="link" external class="text-rich hover:(underline decoration-0.1em decoration-offset-0.15em)" target="_blank">
        {{ linkText }}
      </NuxtLink>
      <Icon name="ph:arrow-up-right" class="ml-0.5 text-sm" />
    </template>
  </BaseRow>
</template>
