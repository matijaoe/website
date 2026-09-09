<script lang="ts" setup>
import type { Project } from '~/models'

const props = defineProps<{
  project: Project
}>()

// The card points at the source. bitcoin-books has no repo, so it falls back to
// the live site rather than being the one card on the page that goes nowhere.
const primaryUrl = computed(() => props.project.repo ?? props.project.url)

// Only worth a second link when it isn't already where the card goes.
const liveUrl = computed(() => (props.project.repo ? props.project.url : undefined))
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
          {{ project.descriptionShort ?? project.description }}
        </p>
      </CardContent>

      <CardFooter class="mt-auto p-4 flex items-end justify-between gap-3">
        <div class="flex flex-wrap gap-1">
          <Badge
            v-for="tag in project.tagsPreview || project.tags"
            :key="tag"
            class="font-mono lowercase text-nowrap"
            variant="outline"
          >
            {{ tag }}
          </Badge>
        </div>

        <!-- z-10 floats this above the stretched overlay so it stays clickable -->
        <NuxtLink
          v-if="liveUrl"
          :to="liveUrl"
          external
          target="_blank"
          class="relative z-20 shrink-0 inline-flex items-center gap-0.5 font-mono lowercase text-xs text-foreground/40 hover:text-foreground transition-colors"
        >
          live
          <Icon name="lucide:arrow-up-right" />
        </NuxtLink>
      </CardFooter>
    </div>
  </Card>
</template>
