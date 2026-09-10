<script lang="ts" setup>
import type { Project } from '~/models'

const props = defineProps<{
  project: Project
}>()

// One destination per card. Each project declares its front door: the live app
// or store listing when there is one worth opening, the repo for everything else.
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
    class="group/card relative flex flex-col rounded-xs shadow-xs overflow-hidden hover:[transition:background-color_700ms,backdrop-filter_700ms] hover:bg-white/[2%] hover:backdrop-blur-3xl"
  >
    <div class="relative border-b aspect-[16/10] overflow-hidden">
      <!-- object-cover so screenshots that are not exactly 16:10 still fill the
           frame; the colour only shows while the image loads. Anchored top-left
           because that is where editor and app screenshots keep their content. -->
      <div v-if="project.thumbnail" class="h-full placeholder-pattern" :style="{ background: project.color }">
        <NuxtImg
          :width="720"
          format="webp"
          :src="project.thumbnail"
          alt=""
          class="size-full object-cover object-left-top"
        />
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

      <CardContent class="grow p-4 py-0 pb-1">
        <p class="text-muted-foreground text-sm">
          {{ project.description }}
        </p>
      </CardContent>

      <CardFooter class="mt-auto p-4">
        <div class="flex flex-wrap w-full gap-1">
          <Badge
            v-for="tag in project.tags"
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

<style scoped>
/* Hovering the pill means the click no longer goes where the title points, so
   the title must stop advertising itself as the destination. */
[data-card]:has([data-pill]:hover) [data-title] {
  text-decoration-line: none;
}
</style>
