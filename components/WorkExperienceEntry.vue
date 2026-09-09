<script lang="ts" setup>
defineProps<{
  company: string
  companyUrl: string
  companyLocation: string
  position: string
  period: string
  description: string
  used: string[]
  logo?: string
  icon?: string
  logoClass?: string
}>()
</script>

<template>
  <li class="relative flex gap-x-3 md:grid md:grid-cols-[180px_1fr] md:gap-5">
    <p class="hidden md:block text-muted-foreground text-sm leading-7">
      {{ period }}
    </p>

    <div class="flex-auto pb-2">
      <p class="text-muted-foreground text-sm mb-0.5 md:hidden">
        {{ period }}
      </p>

      <h3 class="text-lg font-medium">
        {{ position }}
      </h3>

      <div class="flex items-center gap-2 mt-0.5">
        <Icon v-if="icon" :name="icon" class="aspect-square size-4 rounded-[2px] -ml-0.5" />
        <img v-else :src="logo" class="aspect-square h-[16px] rounded-[2px]" :class="logoClass" :alt="`${company} logo`">

        <NuxtLink :to="companyUrl" external target="_blank" class="text-base hover:underline">
          {{ company }}
        </NuxtLink>

        <span class="text-muted-foreground">·</span>

        <p class="text-muted-foreground text-base">
          {{ companyLocation }}
        </p>
      </div>

      <p class="text-muted-foreground mt-2 text-base">
        {{ description }}
      </p>

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
  </li>
</template>
