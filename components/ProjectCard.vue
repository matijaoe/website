<script lang="ts" setup>
import type { Project } from '~/models'

defineProps<{
  project: Project
}>()
</script>

<template>
  <Card class="group flex flex-col hover:bg-white/[2%] hover:backdrop-blur-3xl p-3 shadow-sm transition-all duration-500">
    <NuxtLink
      :to="{ name: 'projects-slug', params: { slug: project.slug } }"
      class="flex grow flex-col"
    >
      <CardHeader class="p-0">
        <div class="w-full flex items-center justify-between gap-2">
          <p class="line-clamp-1 font-medium font-sans transition">
            {{ project.name }}
          </p>
          <span class="text-muted-foreground text-xs font-mono translate-y-[1px]">{{ project.timeframe }}</span>
        </div>
      </CardHeader>

      <CardContent class="grow p-0">
        <div class="mt-1.5">
          <p class="text-muted-foreground text-sm line-clamp-3">
            {{ project.descriptionShort ?? project.description }}
          </p>
        </div>
      </CardContent>

      <CardFooter v-if="project.tags.length" class="mt-auto p-0 pt-[2px]">
        <div class="mt-auto flex flex-wrap gap-1 pt-2">
          <template
            v-for="tag in project.tags"
            :key="tag"
          >
            <Badge
              class="font-light font-mono lowercase"
              variant="secondary"
              size="sm"
            >
              {{ tag }}
            </badge>
          </template>
        </div>
      </CardFooter>
    </NuxtLink>
  </Card>
</template>
