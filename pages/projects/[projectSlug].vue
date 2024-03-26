<script lang="ts" setup>
const route = useRoute('projects-projectSlug')

const { getProduct } = useProjects()
const project = computed(() => getProduct(route.params.projectSlug))

// TODO: issue with either back or on page refresh
</script>

<template>
  <div v-if="project">
    <div>
      <div class="flex items-center justify-between">
        <h1 class="text-5xl font-medium font-display">
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

      <div class="mt-4 prose prose-default dark:prose-invert">
        <p>
          {{ project.description }}
        </p>
      </div>
    </div>
  </div>
</template>
