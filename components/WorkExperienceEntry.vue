<script lang="ts" setup>
defineProps<{
  company: string
  companyUrl?: string
  companyLocation: string
  locationIcon: string
  position: string
  startDate: string
  endDate: string
  slug?: '4ofthem' | 'cura' | '3ofthem' | 'infokarta'
  used: string[]
}>()
</script>

<template>
  <BaseRow label="Aug 2021 - Present" responsive class="-ml-4 group hover:bg-default-200/25 dark:hover:bg-default-800/20 mx--4 rounded-md !p-4">
    <template #label>
      <p class="text-muted-foreground text-sm leading-[1.75rem]">
        {{ startDate }} &mdash; {{ endDate }}
      </p>
    </template>
    <template #default>
      <div>
        <div class="mb-1 flex items-center gap-2">
          <NuxtLink :to="`${slug}`" class="text-xl font-medium hover:underline">
            {{ position }}
          </NuxtLink>
          <Icon name="lucide:arrow-right" class="text-base invisible transition -translate-x-8 opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0" />
        </div>

        <div class="flex items-start gap-2 sm:items-center">
          <slot name="logo" />

          <div class="flex flex-row items-center gap-2 text-sm -mt-0.4">
            <NuxtLink :to="companyUrl" external target="_blank" class="group">
              <p class="text-base">
                {{ company }}
              </p>
            </NuxtLink>
          </div>
          <span class="text-muted-foreground translate-y-[-0.08rem]">&bull;</span>

          <p class="text-muted-foreground flex items-center gap-1 text-base">
            <span>{{ companyLocation }}</span>
          </p>
        </div>
      </div>

      <div v-if="$slots.default" class="text-muted-foreground mt-1 text-base">
        <slot />
      </div>

      <div class="flex items-center flex-wrap gap-1 mt-3">
        <Badge
          v-for="item in used"
          :key="item"
          class="font-mono lowercase text-nowrap"
          variant="secondary-border"
        >
          {{ item }}
        </Badge>
      </div>
    </template>
  </BaseRow>
</template>
