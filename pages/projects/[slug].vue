<script lang="ts" setup>
const route = useRoute('projects-slug')

const { getProduct } = useProjects()
const project = computed(() => getProduct(route.params.slug)!)
</script>

<template>
  <div v-if="project">
    <h1 class="text-5xl font-medium font-display">
      {{ project.name }}
    </h1>
  </div>
</template>
