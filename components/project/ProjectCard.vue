<script lang="ts" setup>
import type { Project } from '~/models'

defineProps<{
  project: Project
}>()
</script>

<template>
  <Card
    class="group flex flex-col rounded-sm hover:bg-white/[2%] hover:backdrop-blur-3xl shadow-sm transition-all duration-700 overflow-hidden"
  >
    <NuxtLink
      :to="{ name: 'projects-slug', params: { slug: project.slug } }"
      class="flex grow flex-col"
    >
      <div class="border-b aspect-[16/10] overflow-hidden">
        <div v-if="project.thumbnail" class="h-full grid place-content-center placeholder-pattern" :style="{ background: project.color }">
          <NuxtImg
            :width="720"
            format="webp"
            :src="project.thumbnail"
            alt="Thumbnail"
          />
        </div>

        <div v-else class="h-full bg-[hsl(var(--background-alt))] placeholder-pattern" />
      </div>

      <div class="flex flex-col grow">
        <CardHeader class="p-4 pb-2">
          <div class="w-full flex items-start justify-between gap-8">
            <p
              class="font-medium text-xl font-display transition"
              :style="{ wordBreak: 'break-word' }"
            >
              {{ project.name }} <span v-if="project.wip" class="text-lg ml-1">🚧</span>
            </p>
            <span class="text-muted-foreground text-sm font-mono translate-y-[7px]">{{ project.timeframe }}</span>
          </div>
        </CardHeader>

        <CardContent class="grow p-4 py-0 pb-1">
          <div>
            <p class="text-muted-foreground text-sm">
              {{ project.descriptionShort ?? project.description }}
            </p>
          </div>
        </CardContent>

        <CardFooter v-if="project.tags.length" class="mt-auto p-4">
          <div class="mt-auto flex flex-wrap w-full gap-1">
            <template
              v-for="tag in project.tagsPreview || project.tags"
              :key="tag"
            >
              <Badge
                class="font-mono lowercase text-nowrap"
                variant="outline"
              >
                {{ tag }}
              </Badge>
            </template>
          </div>
        </CardFooter>
      </div>
    </NuxtLink>
  </Card>
</template>
