<script lang="ts" setup>
import type { Project } from '~/models'

const props = defineProps<{
  project: Project
}>()

// One destination per card. Each project declares its front door: the running
// tool for browser things, the store listing for anything distributed, the repo
// for everything else.
const primaryUrl = computed(() => {
  const { primary, repo, url } = props.project
  return primary === 'url' ? url ?? repo : repo ?? url
})
</script>

<template>
  <Card
    class="group/card relative flex flex-col rounded-xs shadow-xs overflow-hidden hover:[transition:background-color_700ms,backdrop-filter_700ms] hover:bg-white/[2%] hover:backdrop-blur-3xl"
  >
    <div class="border-b aspect-[16/10] overflow-hidden">
      <div v-if="project.thumbnail" class="h-full grid place-content-center placeholder-pattern" :style="{ background: project.color }">
        <NuxtImg
          :width="720"
          format="webp"
          :src="project.thumbnail"
          alt=""
        />
      </div>

      <div v-else class="h-full bg-[hsl(var(--background-alt))] placeholder-pattern" />
    </div>

    <div class="flex flex-col grow">
      <CardHeader class="p-4 pb-2">
        <div class="w-full flex items-start justify-between gap-8">
          <p
            class="font-medium text-xl font-display"
            :style="{ wordBreak: 'break-word' }"
          >
            <!-- after:inset-0 stretches this one anchor over the whole card, so
                 the card is clickable without nesting a second <a> inside it -->
            <NuxtLink
              :to="primaryUrl"
              external
              target="_blank"
              rel="noopener noreferrer"
              class="after:absolute after:inset-0 after:z-10 group-hover/card:underline decoration-0.1em underline-offset-[0.15em]"
            >
              {{ project.name }}
            </NuxtLink>
            <span v-if="project.wip" class="text-lg ml-1">🚧</span>
          </p>
          <span class="text-muted-foreground text-sm font-mono translate-y-[7px]">{{ project.timeframe }}</span>
        </div>
      </CardHeader>

      <CardContent class="grow p-4 py-0 pb-1">
        <p class="text-muted-foreground text-sm">
          {{ project.description }}
        </p>
      </CardContent>

      <CardFooter class="mt-auto p-4">
        <div class="flex flex-wrap w-full gap-1">
          <Badge
            v-for="tag in project.tagsPreview || project.tags"
            :key="tag"
            class="font-mono lowercase text-nowrap"
            variant="outline"
          >
            {{ tag }}
          </Badge>
        </div>
      </CardFooter>
    </div>
  </Card>
</template>
