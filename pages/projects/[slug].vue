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
      <div class="mt-5 flex items-start justify-between">
        <h1 class="text-7xl font-medium font-display text-center">
          {{ project.name }}
        </h1>

        <div class="flex items-center gap-3 mt-2">
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

      <div class="mt-5 flex flex-wrap items-center gap-2 text-[11px] max-w-lg">
        <template
          v-for="tag in project.tech"
          :key="tag"
        >
          <Badge
            class="font-mono lowercase text-nowrap"
            variant="secondary-border"
          >
            {{ tag }}
          </badge>
        </template>
      </div>

      <div class="mt-5 font-sans text-lg max-w-3xl">
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
