<script lang="ts" setup>
import type { Project } from '~/models'

defineProps<{
  project: Project
}>()

const active = useState()
</script>

<template>
  <NuxtLink
    :to="{ name: 'projects-slug', params: { slug: project.slug } }"
    class="block flex flex-col rounded-xl px-5 py-4 transition hover:bg-default-200/25 dark:hover:bg-default-800/20"
  >
    <div>
      <div class="w-full flex items-center justify-between">
        <p class="text-xl font-medium">
          {{ project.name }}
        </p>
        <span class="text-sm font-mono text-dim">{{ project.year }}</span>
      </div>

      <!-- <div
        class="thumbnail-wrapper my-4 aspect-ratio-[720/450] w-[720px] w-full rounded-lg p-4 shadow-neutral-200"
        :style="{
          backgroundColor: project.color
        }"
      >
        <div
          v-if="project.thumbnail"
          class="overflow-hidden rounded-md"
        >
          <NuxtImg
            :class="{ active: active === project.slug }"
            :width="1440"
            format="webp"
            :src="project.thumbnail"
            alt="Project thumbnail"
          />
        </div>
      </div> -->

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
</style>
