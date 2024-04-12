<script lang="ts" setup>
const route = useRoute('projects-slug')

const { getProduct } = useProjects()
const project = computed(() => getProduct(route.params.slug))

// TODO: issue with either back or on page refresh

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
</script>

<template>
  <div v-if="project" class="max-w-3xl w-full">
    <div>
      <div class="flex items-center justify-between">
        <h1 class="text-6xl font-medium font-display">
          {{ project.name }}
        </h1>

        <div class="flex items-center gap-4">
          <NuxtLink v-if="project.repo" :to="project.repo" external target="_blank">
            <Icon name="lucide:link" class="text-xl" />
          </NuxtLink>
          <NuxtLink v-if="project.url" :to="project.url" external target="_blank">
            <Icon name="lucide:globe" class="text-xl" />
          </NuxtLink>
        </div>
      </div>

      <div class="mt-5 flex flex-wrap items-center gap-1 text-[11px] font-mono">
        <div v-for="tag in project.tags" :key="tag" class="text-muted-foreground border border-default-700 rounded-full px-2 py-0.5 lowercase">
          {{ tag }}
        </div>
      </div>

      <div class="mt-4 prose prose-default dark:prose-invert">
        <p>
          {{ project.description }}
        </p>
      </div>

      <div v-if="images?.length" class="mt-10">
        <div
          v-for="image in images"
          :key="image"
          class="thumbnail-wrapper aspect-ratio-[720/450] w-full rounded-xl p-8 shadow-neutral-200"
        >
          <div
            class="overflow-hidden rounded-xl"
          >
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
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.thumbnail-wrapper {
  background-color: v-bind(imageBgColor);
}

img {
  view-transition-name: project-thumbnail;
}
</style>

<style>
::view-transition-image-pair(project-thumbnail) {
  isolation: none;
}
</style>
