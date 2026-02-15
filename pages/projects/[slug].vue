<script lang="ts" setup>
import { motion } from 'motion-v'

const route = useRoute('projects-slug')

const { getProduct } = useProjects()
const project = computed(() => getProduct(route.params.slug))

const images = computed(() => {
  const { images, thumbnail } = project.value ?? {}
  if (images?.length) {
    return images
  }
  return thumbnail ? [thumbnail] : []
})

useSeoMeta({
  title: () => project.value?.name ?? 'Projects',
  ogTitle: () => project.value?.name ?? 'Projects',
})

const itemInitial = { opacity: 0, y: 20, filter: 'blur(4px)' }
const itemAnimate = {
  opacity: 1,
  y: 0,
  filter: 'blur(0px)',
  transition: {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  },
}
</script>

<template>
  <div v-if="project" class="w-full">
    <div>
      <div class="mt-5 flex flex-col md:flex-row items-start justify-between gap-4">
        <h1 class="text-5xl lg:text-7xl font-medium font-display text-left">
          {{ project.name }}
        </h1>

        <div class="hidden md:flex items-center gap-3 mt-2">
          <Button to="/projects" variant="ghost" class="flex items-center gap-2 lowercase">
            <Icon name="lucide:arrow-left" class="text-[1.2em]" /> Back
          </Button>
          <Button v-if="project.repo" :to="project.repo" external target="_blank" variant="secondary" class="flex items-center gap-2 lowercase">
            <Icon name="lucide:code" class="text-[1.2em]" /> Code
          </Button>
          <Button v-if="project.url" :to="project.url" external target="_blank" variant="default" class="flex items-center gap-2 lowercase">
            <Icon name="lucide:arrow-up-right" class="text-[1.2em]" /> Live
          </Button>
        </div>
      </div>

      <div class="mt-5 flex flex-col gap-2 text-[11px] max-w-lg">
        <div class="flex flex-wrap items-center gap-2">
          <template
            v-for="tag in project.tags"
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

        <div class="flex md:hidden flex-wrap items-center gap-2">
          <NuxtLink :to="project.repo" external target="_blank" class="block md:hidden">
            <Badge
              class="font-mono lowercase text-nowrap flex items-center gap-1"
              variant="outline"
            >
              <Icon name="lucide:code" /> code
            </Badge>
          </NuxtLink>
          <NuxtLink :to="project.url" external target="_blank" class="block md:hidden">
            <Badge
              class="font-mono lowercase text-nowrap flex items-center gap-1"
              variant="primary"
            >
              <Icon name="lucide:arrow-up-right" /> live
            </Badge>
          </NuxtLink>
        </div>
      </div>

      <div class="mt-5 font-sans text-base md:text-lg max-w-3xl">
        <p>
          {{ project.description }}
        </p>
      </div>

      <!-- TODO: implement image distortion effects -->
      <div
        v-if="images?.length"
        class="mt-10 max-w-3xl flex flex-col gap-4"
      >
        <motion.div
          v-for="image in images"
          :key="image"
          :initial="itemInitial"
          :while-in-view="itemAnimate"
          :once="true"
          :viewport="{ amount: 0.2 }"
        >
          <div class="overflow-hidden ring-3 ring-input rounded-md aspect-video bg-background-alt animate-pulse">
            <NuxtLink
              :to="image"
              target="_blank"
              external
            >
              <NuxtImg
                :width="1440"
                format="webp"
                :src="image"
                alt="Thumbnail"
                class="relative z-10"
                @load="($event.target as HTMLElement)?.closest('.animate-pulse')?.classList.remove('animate-pulse', 'bg-background-alt')"
              />
            </NuxtLink>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</template>
