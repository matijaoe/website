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
</script>

<template>
  <div v-if="project" class="max-w-3xl w-full">
    <div>
      <div class="mt-5 flex items-start justify-between">
        <h1 class="text-6xl font-medium font-display">
          {{ project.name }}
        </h1>

        <div class="flex items-center gap-3 mt-2">
          <Button v-if="project.repo" :to="project.repo" external target="_blank" variant="frosted-outline" class="flex items-center gap-2">
            Code <Icon name="lucide:code" class="text-[1.2em]" />
          </Button>
          <Button v-if="project.url" :to="project.url" external target="_blank" variant="default" class="flex items-center gap-2">
            Live <Icon name="lucide:arrow-up-right" class="text-[1.2em]" />
          </Button>
        </div>
      </div>

      <div class="mt-5 flex flex-wrap items-center gap-1 text-[11px]">
        <Badge
          v-if="project.wip"
          class="font-mono lowercase font-bold"
          variant="primary"
        >
          wip
        </Badge>
        <template
          v-for="tag in project.tags"
          :key="tag"
        >
          <Badge
            class="font-light font-mono lowercase"
            variant="secondary"
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

      <!-- TODO: implement image distortion effects -->
      <Card v-if="images?.length" class="mt-10 border-none">
        <div
          v-for="image in images"
          :key="image"
        >
          <div class="overflow-hidden ring ring-1 ring-foreground">
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
