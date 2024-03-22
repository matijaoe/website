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
  <BaseRow label="Aug 2021 - Present" responsive>
    <template #label>
      <p class="text-sm leading-[1.75rem] text-dim">
        {{ startDate }} &mdash; {{ endDate }}
      </p>
    </template>
    <template #value>
      <div>
        <div class="mb-2">
          <p class="text-lg text-rich">
            {{ position }}
          </p>
        </div>

        <div class="flex items-start gap-3 sm:items-center">
          <slot name="logo" />

          <div class="flex flex-row items-center gap-2 text-sm lt-sm:-mt-0.4">
            <NuxtLink :to="companyUrl" external target="_blank" class="group">
              <p class="text-sm group-hover:underline">
                {{ company }}
              </p>
            </NuxtLink>
          </div>
          <span class="text-dim">&bull;</span>

          <p class="text-dim-2">
            {{ companyLocation }}
          </p>
        </div>
      </div>

      <div v-if="$slots.default" class="mt-2 text-sm text-dim-2">
        <slot />
      </div>
    </template>
  </BaseRow>
</template>
