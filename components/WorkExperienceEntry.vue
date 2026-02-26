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
  slug?: 'theydo' | '4ofthem' | 'mendracare' | '3ofthem' | 'infokarta'
  used: string[]
  logoClass?: string
}>()
</script>

<template>
  <li class="relative flex gap-x-3 md:grid md:grid-cols-[180px_1fr] md:gap-5">
    <!-- Date (desktop) -->
    <div class="hidden md:block">
      <p class="text-muted-foreground text-sm leading-7">
        {{ startDate }} &mdash; {{ endDate }}
      </p>
    </div>

    <!-- Content -->
    <div class="flex-auto relative">
      <div class="pb-2">
        <p class="text-muted-foreground text-sm mb-0.5 md:hidden">
          {{ startDate }} &mdash; {{ endDate }}
        </p>

        <h3 class="text-lg font-medium">
          {{ position }}
        </h3>

        <div class="flex items-center gap-2 mt-0.5">
          <slot name="logo">
            <img :src="logo" class="aspect-square h-[16px] rounded-[2px]" :class="[logoClass]" alt="logo">
          </slot>
          <NuxtLink :to="companyUrl" external target="_blank" class="text-base hover:underline">
            {{ company }}
          </NuxtLink>
          <span class="text-muted-foreground">·</span>
          <p class="text-muted-foreground text-base">
            {{ companyLocation }}
          </p>
        </div>

        <div v-if="$slots.default" class="text-muted-foreground mt-2 text-base">
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
      </div>
    </div>
  </li>
</template>
