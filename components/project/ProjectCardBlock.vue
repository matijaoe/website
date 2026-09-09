<script lang="ts" setup>
import type { Project } from '~/models'

const props = defineProps<{
  project: Project
}>()

const primaryUrl = computed(() => props.project.repo ?? props.project.url)

const liveUrl = computed(() => (props.project.repo ? props.project.url : undefined))
</script>

<template>
  <Card
    class="group/card relative shadow-xs overflow-hidden hover:[transition:background-color_700ms,backdrop-filter_700ms] hover:bg-white/[2%] hover:backdrop-blur-3xl"
  >
    <div class="grid grid-cols-2 h-[320px]">
      <div class="group/body flex flex-col">
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
                   the body is clickable without nesting a second <a> inside it -->
              <NuxtLink
                :to="primaryUrl"
                external
                target="_blank"
                class="after:absolute after:inset-0 after:z-10 group-hover/body:underline decoration-0.1em underline-offset-[0.15em]"
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

      <div class="group/media relative overflow-hidden">
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

        <!-- z-20 clears the card-wide overlay below, so this zone wins the click -->
        <NuxtLink
          v-if="liveUrl"
          :to="liveUrl"
          external
          target="_blank"
          :aria-label="`${project.name} — live site`"
          class="absolute inset-0 z-20 flex items-start justify-end p-4"
        >
          <span class="inline-flex items-center gap-0.5 rounded-full bg-background/80 px-2 py-0.5 font-mono lowercase text-[11px] text-foreground/70 opacity-0 backdrop-blur transition-opacity duration-300 group-hover/media:opacity-100">
            live
            <Icon name="lucide:arrow-up-right" />
          </span>
        </NuxtLink>
      </div>
    </div>
  </Card>
</template>
