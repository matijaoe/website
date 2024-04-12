<script lang="ts" setup>
defineProps<{
  company: string
  companyUrl?: string
  companyLocation: string
  locationIcon: string
  position: string
  startDate: string
  endDate: string
  slug?: '4ot' | 'cura' | '3ot' | 'infokarta'
}>()
</script>

<template>
  <BaseRow label="Aug 2021 - Present" responsive class="group mx--4 rounded-md hover:bg-default-200/25 !p-4 dark:hover:bg-default-800/20">
    <template #label>
      <p class="text-muted-foreground text-sm leading-[1.75rem]">
        {{ startDate }} &mdash; {{ endDate }}
      </p>
    </template>
    <template #value>
      <div>
        <div class="mb-1 flex items-center justify-between gap-6">
          <p class="text-lg font-medium">
            {{ position }}
          </p>

          <NuxtLink v-if="slug" :to="`/work/${slug}`" class="group invisible inline flex items-center gap-1 text-sm group-hover:visible">
            <span class="hover:underline">See more</span> <Icon name="lucide:arrow-up-right" class="text-md" />
          </NuxtLink>
        </div>

        <div class="flex items-start gap-2 sm:items-center">
          <slot name="logo" />

          <div class="flex flex-row items-center gap-2 text-sm -mt-0.4">
            <NuxtLink :to="companyUrl" external target="_blank" class="group">
              <p class="text-sm decoration-dotted hyperlink hover:decoration-current">
                {{ company }}
              </p>
            </NuxtLink>
          </div>
          <span class="text-muted-foreground">&bull;</span>

          <p class="text-muted-foreground flex items-center gap-1 text-sm">
            <span>{{ companyLocation }}</span>
          </p>
        </div>
      </div>

      <div v-if="$slots.default" class="text-muted-foreground mt-1 text-sm">
        <slot />
      </div>
    </template>
  </BaseRow>
</template>
