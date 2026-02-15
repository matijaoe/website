<script lang="ts" setup>
import type { Project } from '~/models'

defineProps<{
  project: Project
}>()
</script>

<template>
  <Card
    class="group shadow-xs overflow-hidden hover:[transition:background-color_700ms,backdrop-filter_700ms] hover:bg-white/[2%] hover:backdrop-blur-3xl"
  >
    <NuxtLink
      :to="{ name: 'projects-slug', params: { slug: project.slug } }"
      class="grid grid-cols-2 h-[320px]"
    >
      <div>
        <CardHeader class="p-9 pb-4">
          <div class="flex flex-wrap w-full gap-1 mb-3">
            <template
              v-for="tag in project.tagsPreview || project.tags"
              :key="tag"
            >
              <Badge
                class="font-mono lowercase text-nowrap"
                variant="outline"
              >
                {{ tag }}
              </badge>
            </template>
          </div>

          <div class="w-full flex items-start justify-between gap-8">
            <p
              class="font-medium text-4xl font-display"
              :style="{ wordBreak: 'break-word' }"
            >
              {{ project.name }} <span v-if="project.wip" class="text-lg ml-1">🚧</span>
            </p>
            <span class="text-muted-foreground text-sm font-mono translate-y-[7px]">{{ project.timeframe }}</span>
          </div>
        </CardHeader>

        <CardContent class="p-9 py-0">
          <div>
            <p class="text-muted-foreground text-base">
              {{ project.descriptionShort ?? project.description }}
            </p>
          </div>
        </CardContent>

        <CardFooter v-if="project.tags.length" class="mt-auto p-8" />
      </div>

      <div class="grid-col-2 overflow-hidden">
        <div v-if="project.thumbnail" class="p-7 h-full grid place-content-center placeholder-pattern" :style="{ background: project.color }">
          <HoverPerspectiveContainer class="rounded-xs">
            <NuxtImg
              :width="720"
              format="webp"
              :src="project.thumbnail"
              alt="Thumbnail"
            />
          </HoverPerspectiveContainer>
        </div>

        <div v-else class="h-full bg-[hsl(var(--background-alt))] placeholder-pattern" />
      </div>
    </NuxtLink>
  </Card>
</template>
