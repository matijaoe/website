<script lang="ts" setup>
defineProps<{
  label: string
  link: string
  linkText: string
}>()
</script>

<template>
  <BaseRow :label="label" class="items-center">
    <template #label>
      <slot name="label" />
    </template>

    <template #default>
      <NuxtLink :href="link" external class="decoration-0.1em decoration-offset-0.15em hover:underline" target="_blank">
        {{ linkText }}
      </NuxtLink>
      <Icon name="lucide:arrow-up-right" class="ml-0.5 text-sm" />
    </template>
  </BaseRow>
</template>
