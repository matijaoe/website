<script lang="ts" setup>
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

const imageBgColor = computed(() => {
  const { color } = project.value ?? {}
  return color ?? 'transparent'
})

useSeoMeta({
  title: () => project.value?.name ?? 'Projects',
  ogTitle: () => project.value?.name ?? 'Projects',
})
</script>

<template>
  <div v-if="project" class="w-full">
    <div>
      <div class="mt-5 flex flex-col md:flex-row items-start justify-between gap-4">
        <h1 class="text-5xl lg:text-7xl font-medium font-display text-left">
          {{ project.name }}
        </h1>

        <div class="hidden md:flex items-center gap-3 mt-2">
          <Button to="/projects" variant="frosted-ghost" class="flex items-center gap-2">
            <Icon name="lucide:arrow-left" class="text-[1.2em]" /> Back
          </Button>
          <Button v-if="project.repo" :to="project.repo" external target="_blank" variant="secondary" class="flex items-center gap-2">
            <Icon name="lucide:code" class="text-[1.2em]" /> Code
          </Button>
          <Button v-if="project.url" :to="project.url" external target="_blank" variant="default" class="flex items-center gap-2">
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
              variant="secondary-border"
            >
              {{ tag }}
            </Badge>
          </template>
        </div>

        <div class="flex md:hidden flex-wrap items-center gap-2">
          <NuxtLink :to="project.repo" external target="_blank" class="block md:hidden">
            <Badge
              class="font-mono lowercase text-nowrap flex items-center gap-1"
              variant="secondary-border"
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
      <Card v-if="images?.length" class="mt-10 max-w-3xl">
        <div
          v-for="image in images"
          :key="image"
        >
          <div class="overflow-hidden ring ring-input rounded-md">
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
              />
            </NuxtLink>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>
