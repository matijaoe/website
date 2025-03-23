<script lang="ts" setup>
defineProps<{
  company: string
  companyUrl?: string
  companyLocation: string
  locationIcon: string
  position: string
  startDate: string
  endDate: string
  logo?: string
  slug?: 'theydo' | '4ofthem' | 'cura' | '3ofthem' | 'infokarta'
  used: string[]
  logoClass?: string
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
          <h3 :to="`${slug}`" class="text-xl font-medium">
            {{ position }}
          </h3>
        </div>

        <div class="flex items-start gap-2 sm:items-center">
          <slot name="logo">
            <img :src="logo" class="aspect-square h-[20px] rounded-[2px]" :class="[logoClass]" alt="logo">
          </slot>

          <div class="flex flex-row items-center gap-2 text-sm -mt-0.4">
            <NuxtLink :to="companyUrl" external target="_blank" class="hover:underline">
              <p class="text-base ">
                {{ company }}
              </p>
            </NuxtLink>
          </div>
          <span class="text-muted-foreground translate-y-[-0.08rem]">∗</span>

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
          variant="outline"
        >
          {{ item }}
        </Badge>
      </div>
    </template>
  </BaseRow>
</template>
