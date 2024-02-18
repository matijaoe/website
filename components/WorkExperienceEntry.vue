<script lang="ts" setup>
defineProps<{
  company: string
  companyUrl?: string
  companyLocation: string
  position: string
  startDate: string
  endDate: string
}>()
</script>

<template>
  <BaseRow label="Aug 2021 - Present">
    <template #label>
      <p class="text-sm text-default-600 leading-[1.75rem] dark:text-default-500">
        {{ startDate }} &mdash; {{ endDate }}
      </p>
    </template>
    <template #value>
      <div>
        <div class="mb-1">
          <p class="text-lg">
            {{ position }}
          </p>
        </div>

        <NuxtLink :to="companyUrl" external target="_blank" class="group">
          <div class="flex items-center gap-3">
            <slot name="logo" />

            <div class="flex items-center gap-2 text-sm">
              <p class="text-sm group-hover:underline">
                {{ company }}
              </p>
              <span class="text-default-600 dark:text-default-400">&bull;</span>
              <p class="text-default-600 dark:text-default-400">
                {{ companyLocation }}
              </p>
            </div>
          </div>
        </NuxtLink>

        <div v-if="$slots.default" class="mt-2 text-sm text-default-600 dark:text-default-400">
          <slot />
        </div>
      </div>
    </template>
  </BaseRow>
</template>
