<script lang="ts" setup>
import type { Project } from '~/models'

const props = defineProps<{
  project: Project
}>()

// One destination per card. Each project declares its front door: the store
// listing for anything distributed, the repo for everything else.
const primaryUrl = computed(() => {
  const { primary, repo, url } = props.project
  return primary === 'url' ? url ?? repo : repo ?? url
})

// The pill offers whatever the card itself does not open, so a repo-led card
// points at the live site and a store-led one points back at the source.
const secondary = computed(() => {
  const { repo, url } = props.project
  const other = primaryUrl.value === repo ? url : repo
  return other ? { url: other, label: other === repo ? 'github' : 'live' } : undefined
})
</script>

<template>
  <Card
    data-card
    class="group/card relative shadow-xs overflow-hidden hover:[transition:background-color_700ms,backdrop-filter_700ms] hover:bg-white/[2%] hover:backdrop-blur-3xl"
  >
    <div class="grid grid-cols-2 h-[320px]">
      <div class="flex flex-col">
        <CardHeader class="p-9 pb-4">
          <div class="flex flex-wrap w-full gap-1 mb-3">
            <Badge
              v-for="tag in project.tagsPreview || project.tags"
              :key="tag"
              class="font-mono lowercase text-nowrap"
              variant="outline"
            >
              {{ tag }}
            </Badge>
          </div>

          <div class="w-full flex items-start justify-between gap-8">
            <p
              class="font-medium text-4xl font-display"
              :style="{ wordBreak: 'break-word' }"
            >
              <!-- after:inset-0 stretches this one anchor over the whole card, so
                   the card is clickable without nesting a second <a> inside it -->
              <NuxtLink
                :to="primaryUrl"
                data-title
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

        <CardContent class="p-9 py-0">
          <p class="text-muted-foreground text-base">
            {{ project.description }}
          </p>
        </CardContent>

        <CardFooter class="mt-auto p-9 pt-4" />
      </div>

      <div class="relative overflow-hidden">
        <div v-if="project.thumbnail" class="p-7 h-full grid place-content-center placeholder-pattern" :style="{ background: project.color }">
          <HoverPerspectiveContainer class="rounded-xs">
            <NuxtImg
              :width="720"
              format="webp"
              :src="project.thumbnail"
              alt=""
            />
          </HoverPerspectiveContainer>
        </div>

        <div v-else class="h-full bg-[hsl(var(--background-alt))] placeholder-pattern" />

        <!-- "instead" names it as an alternative to the card's own destination.
             Fixed colours in both themes: it sits on screenshots, which do not
             follow the theme, so a theme-tinted chip loses contrast on half of
             them. focus-visible keeps it reachable without a pointer. -->
        <NuxtLink
          v-if="secondary"
          :to="secondary.url"
          external
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${project.name} — ${secondary.label === 'github' ? 'source code' : 'live site'}`"
          data-pill
          class="absolute bottom-2 right-2 z-20 inline-flex items-center gap-0.5 rounded-full border border-black/10 bg-white/90 px-2 py-0.5 font-mono lowercase text-[11px] text-black shadow-sm backdrop-blur-sm translate-y-1 opacity-0 transition duration-150 ease-out hover:bg-white group-hover/card:translate-y-0 group-hover/card:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
        >
          {{ secondary.label }} instead
          <Icon name="lucide:arrow-up-right" />
        </NuxtLink>
      </div>
    </div>
  </Card>
</template>

<style scoped>
/* Hovering the pill means the click no longer goes where the title points, so
   the title must stop advertising itself as the destination. */
[data-card]:has([data-pill]:hover) [data-title] {
  text-decoration-line: none;
}
</style>
