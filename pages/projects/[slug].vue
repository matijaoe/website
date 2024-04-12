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
      <div class="flex items-center justify-between gap-2 pt-2 -mt-[calc(44px+20px)]">
        <Button to="/projects" variant="ghost" class="flex items-center gap-2 -ml-4">
          <Icon name="lucide:arrow-left" class="text-[1.2em]" /> Back
        </Button>
        <div class="flex ites-center gap-2">
          <Button v-if="project.repo" :to="project.repo" external target="_blank" variant="outline" class="flex items-center gap-2">
            Code <Icon name="lucide:code" class="text-[1.2em]" />
          </Button>
          <Button v-if="project.url" :to="project.url" external target="_blank" variant="default" class="flex items-center gap-2">
            Live <Icon name="lucide:arrow-up-right" class="text-[1.2em]" />
          </Button>
        </div>
      </div>

      <div class="mt-5">
        <h1 class="text-6xl font-medium font-display">
          {{ project.name }}
        </h1>
      </div>

      <div class="mt-5 flex flex-wrap items-center gap-1 text-[11px]">
        <Badge
          v-if="project.wip"
          class="font-mono lowercase font-bold"
          variant="primary"
          size="sm"
        >
          wip
        </Badge>
        <template
          v-for="tag in project.tags"
          :key="tag"
        >
          <Badge
            class="font-light font-mono lowercase"
            variant="outline"
            size="sm"
          >
            {{ tag }}
          </badge>
        </template>
      </div>

      <div class="mt-5 font-sans">
        <p>
          {{ project.description }}
        </p>
      </div>

      <Card v-if="images?.length" class="mt-10 border-none">
        <div
          v-for="image in images"
          :key="image"
          class="thumbnail-wrapper h-full w-full rounded-xl p-8"
        >
          <!-- TODO: shift on image appear -->
          <div class="overflow-hidden rounded-xl">
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

<style lang="postcss" scoped>
.thumbnail-wrapper {
  background-color: v-bind(imageBgColor);
  aspect-ratio: 720 / 450;
}
</style>
