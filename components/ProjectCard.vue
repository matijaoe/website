<script lang="ts" setup>
import type { Project } from '~/models'

const props = defineProps<{
  project: Project
}>()

const active = useState()

const thumbnailColor = computed(() => {
  return props.project.color ?? 'transparent'
})
</script>

<template>
  <NuxtLink
    :to="{ name: 'projects-slug', params: { slug: project.slug } }"
    class="group block flex flex-col rounded-xl px-5 py-4 transition hover:bg-default-200/25 dark:hover:bg-default-800/20"
  >
    <div>
      <div class="w-full flex items-center justify-between">
        <p class="text-lg font-semibold text-rich">
          {{ project.name }}
        </p>
        <span class="text-xs font-mono text-dim">{{ project.year }}</span>
      </div>

      <div
        v-if="project.featured"
        class="thumbnail-bg grid my-3 mb-4 aspect-ratio-3/2 w-full place-content-center overflow-hidden rounded-xl p-5 shadow-neutral-200"
      >
        <NuxtImg
          v-if="project.thumbnail"
          class="rounded-md"
          :class="{ active: active === project.slug }"
          :width="520"
          :height="325"
          format="webp"
          :src="project.thumbnail"
          alt="Project thumbnail"
        />
      </div>

      <div class="mt-1.5">
        <p class="text-sm text-dim-2">
          {{ project.description }}
        </p>
      </div>
    </div>

    <div v-if="project.tags.length" class="mt-auto flex pt-2">
      <div v-for="(tag, idx) in project.tags" :key="tag" class="flex items-center justify-center text-dim">
        <span class="text-11px leading-none font-mono lowercase">{{ tag }}</span>
        <span v-if="idx < project.tags.length - 1 " class="mx-1 font-light">/</span>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="postcss" scoped>
img.active {
  view-transition-name: project-thumbnail;
  contain: layout;
}

.thumbnail-bg {
  background-color: v-bind(thumbnailColor);
}
</style>
