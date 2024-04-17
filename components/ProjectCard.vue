<script lang="ts" setup>
import type { Project } from '~/models'

defineProps<{
  project: Project
}>()
</script>

<template>
  <Card class="group flex flex-col hover:bg-white/[2%] hover:backdrop-blur-3xl shadow-sm transition-all duration-700">
    <NuxtLink
      :to="{ name: 'projects-slug', params: { slug: project.slug } }"
      class="flex grow flex-col"
    >
      <CardHeader class="p-4">
        <div class="w-full flex items-start justify-between gap-8">
          <p class="font-medium text-4xl font-display transition">
            {{ project.name }}
          </p>
          <span class="text-muted-foreground text-sm font-mono translate-y-[7px]">{{ project.timeframe }}</span>
        </div>
      </CardHeader>

      <CardContent class="grow p-4 pt-0">
        <div>
          <p class="text-muted-foreground text-base  line-clamp-3">
            {{ project.descriptionShort ?? project.description }}
          </p>
        </div>
      </CardContent>

      <CardFooter v-if="project.tags.length" class="mt-auto p-2">
        <div class="mt-auto flex flex-wrap w-full gap-1">
          <template
            v-for="tag in project.tags"
            :key="tag"
          >
            <Badge
              class="font-mono lowercase text-nowrap"
              variant="outline"
              size="lg"
            >
              {{ tag }}
            </badge>
          </template>
        </div>
      </CardFooter>
    </NuxtLink>
  </Card>
</template>
