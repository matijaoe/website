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
  <li class="relative flex gap-x-3 md:grid md:grid-cols-3 md:gap-5">
    <!-- Date (desktop) -->
    <div class="hidden md:block col-span-1">
      <p class="text-muted-foreground text-sm leading-7">
        {{ startDate }} &mdash; {{ endDate }}
      </p>
    </div>

    <!-- Content -->
    <div class="flex-auto md:col-span-2 relative">
      <!-- Desktop timeline (absolute, in grid gap) -->
      <div class="hidden md:flex flex-col items-center absolute top-0 bottom-0 -left-10 w-6">
        <div class="timeline-line absolute top-8 -bottom-5 left-1/2 -translate-x-1/2 w-px bg-foreground/15 dark:bg-foreground/16" />
        <div class="relative mt-0.5 flex size-6 items-center justify-center z-10">
          <div class="size-2.5 rounded-full bg-foreground/5 dark:bg-foreground/6 ring-1 ring-foreground/15 dark:ring-foreground/16" />
        </div>
      </div>

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
