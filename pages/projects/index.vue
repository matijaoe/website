<script lang="ts" setup>
const { uniqueCategories, getProjectsByCategory } = useProjects()

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div>
    <PageHeading class="mb-6">
      Projects
    </PageHeading>

    <div class="flex flex-col max-w-8xl">
      <div v-for="cat in uniqueCategories" :key="cat.value" class="group">
        <div v-if="cat.value !== 'projects'" :id="cat.value" class="flex items-center gap-2 pt-12 pb-8">
          <NuxtLink :to="`#${cat.value}`" class="font-display font-light text-4xl md:text-7xl md:text-secondary group-hover:text-foreground transition duration-500 w-fit shrink-0 lowercase">
            {{ cat.label }}
          </NuxtLink>
        </div>

        <div class="content-stretch projects-grid items-stretch justify-stretch gap-2">
          <template
            v-for="project in getProjectsByCategory(cat.value)"
            :key="project.slug"
          >
            <ProjectCard :project class="md:min-h-auto" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
img.active {
  view-transition-name: selected-film;
  contain: layout;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr) );
  gap: 1rem;
}
</style>
